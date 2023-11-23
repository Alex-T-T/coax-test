'use client';

import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import Title from './Title';
import { getItemsList } from '../helpers/getItemsList';
import { IItem } from '../api/items/type';

function Card() {
    const [listItems, setListItems] = useState<IItem[]>([]);

    useEffect(() => {
        getItemsList().then((res) => setListItems(res));
    }, []);

    return (
        <div className="border border-transparent rounded-[30px]  bg-item-card bg-all bg-no-repeat w-[438px] pt-[19px] pb-[160px] flex flex-col justify-center items-center shadow-card-shadow backdrop-blur-[7.5px]">
            <Title text="shoping list" className="mb-[36px]" />
            <Form setListItems={setListItems} />
            <List listItems={listItems} setListItems={setListItems} />
        </div>
    );
}

export default Card;
