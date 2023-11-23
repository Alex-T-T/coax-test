import { IItemDB } from '../database/schema/itemsSchema';

export const createItem = async (data: IItemDB) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

    return await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/items`,
        requestOptions
    ).then((res) => {
        if (!res.ok) {
            throw new Error(res.status.toString(), { cause: res.statusText });
        }
        return res.json();
    });
};
