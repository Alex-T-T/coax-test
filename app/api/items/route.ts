import { NextRequest, NextResponse } from 'next/server';
import { IItem, IItemPost } from '@/app/api/items/type';

import database from '@/app/database/database';
import items, { IItemDB } from '@/app/database/schema/itemsSchema';
import itemsValidation from '@/app/database/schema/itemsValidation';

export const GET = async (req: NextRequest) => {
    await database();

    const res = await items.find({});

    if (res.length) {
        return NextResponse.json(res);
    }
    return NextResponse.json([]);
};

export const POST = async (req: NextRequest) => {
    await database();
    const data: IItemDB = await req.json();

    if (!data.name) {
        return NextResponse.json(
            { message: 'Required fields is missing!' },
            { status: 400 }
        );
    }

    const newData: IItemPost = {
        name: data.name.toLowerCase(),
        priority: +data.priority,
    };

    const validBody = itemsValidation.safeParse(newData);

    const isExistingData = await items.findOne({
        name: newData.name.toLocaleLowerCase(),
    });

    if (isExistingData) {
        return NextResponse.json(
            {
                message: `Category with name ${newData.name.toUpperCase()} alredy exist.`,
            },
            {
                status: 400,
                statusText: `Category with name ${newData.name.toUpperCase()} alredy exist.`,
            }
        );
    }

    if (!validBody.success) {
        return NextResponse.json(validBody.error.issues, { status: 400 });
    }

    try {
        const res = await items.create(validBody.data);

        return NextResponse.json(res, { status: 201 });
    } catch (error) {
        console.log('error: ', error);
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status: 400 }
        );
    }
};
