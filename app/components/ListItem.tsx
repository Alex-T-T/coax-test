'use client';

import { Dispatch, SetStateAction } from 'react';
import { IItem } from '../api/items/type';
import { deleteItem } from '../helpers/deleteItem';

interface IListItemProps {
    data: IItem;
    setListItems: Dispatch<SetStateAction<IItem[]>>;
}

function ListItem({ data, setListItems }: IListItemProps) {
    const handleDelete = async () => {
        await deleteItem(data._id.toString());
        setListItems((prev: IItem[]) =>
            prev.filter((item) => item._id !== data._id)
        );
    };

    return (
        <div className="w-[385px] border-b-2 border-gold flex flex-row justify-between pl-[21px] pb-[6px]">
            <div className="flex flex-row">
                <div className="bg-gold w-[30px] mr-[15px] text-center border border-transparent rounded-[3px]">
                    {data.priority}
                </div>
                <div>{data.name}</div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                onClick={handleDelete}
                className="cursor-pointer"
            >
                <path
                    d="M22.1312 9.63126L20.3687 7.86876L15 13.2375L9.63124 7.86876L7.86874 9.63126L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63126Z"
                    fill="#FFD700"
                />
            </svg>
        </div>
    );
}

export default ListItem;
