import { NextRequest, NextResponse } from 'next/server';
import { IItemUpdate } from '../type';

import mongoose from 'mongoose';

import database from '@/app/database/database';
import items from '@/app/database/schema/itemsSchema';

export const GET = async (
    req: NextRequest,
    {
        params,
    }: {
        params: {
            id: string;
        };
    }
) => {
    await database();
    if (!params.id || !mongoose.Types.ObjectId.isValid(params.id)) {
        return NextResponse.json(
            { message: 'Category id is not valid ObjectId' },
            { status: 404 }
        );
    }

    const item = await items.findById(params.id);

    if (!item) {
        return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }

    return NextResponse.json(item);
};

export const PATCH = async (
    req: NextRequest,
    {
        params,
    }: {
        params: {
            id: string;
        };
    }
) => {
    const data: IItemUpdate = await req.json();

    if (!params.id || !mongoose.Types.ObjectId.isValid(params.id)) {
        return NextResponse.json(
            { message: 'Item id is not valid ObjectId' },
            { status: 404 }
        );
    }

    if (!data.name && !data.priority) {
        return NextResponse.json(
            { message: 'All empty fields is not allowed!' },
            { status: 400 }
        );
    }

    try {
        await items.findOneAndUpdate({ _id: params.id }, { $set: data });
    } catch (error) {
        return NextResponse.json(
            { error: 'This item does not exist at Database' },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { message: 'Successfully updated' },
        { status: 200 }
    );
};

export const DELETE = async (
    req: NextRequest,
    {
        params,
    }: {
        params: {
            id: string;
        };
    }
) => {
    await database();
    if (!params.id || !mongoose.Types.ObjectId.isValid(params.id)) {
        return NextResponse.json(
            { message: 'Category id is not valid ObjectId' },
            { status: 404 }
        );
    }

    try {
        await items.findByIdAndDelete(params.id);

        return NextResponse.json(
            { message: 'Successfully deleted' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
};
