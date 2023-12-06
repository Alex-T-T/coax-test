'use client';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { createItem } from '../helpers/createItem';
import { toast } from 'react-toastify';
import { IItem } from '../api/items/type';

interface IFormProps {
    setListItems: Dispatch<SetStateAction<IItem[]>>;
}

function Form({ setListItems }: IFormProps) {
    const [data, setData] = useState({ name: '', priority: 0 });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!data.name || !data.priority) {
            toast.error('Missing required fields');
            return;
        }
        console.log('data.priority => ', +data.priority === 0);
        if (data.priority < 0 || +data.priority === 0) {
            toast.error('Prioryty can not be "0" or less then "0"');
            return;
        }
        try {
            const newItem: IItem = await createItem(data);
            toast.success('Item successfully created');
            setListItems((prev) => [...prev, newItem]);
            setData({ name: '', priority: 0 });
        } catch (error) {
            if (error && typeof error === 'object' && 'cause' in error) {
                toast.error((error as { cause: string }).cause);
            } else {
                console.error(error);
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <form className="space-x-[14px] mb-[50px]" onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Title..."
                className="px-[5px] py-[6px]  border border-transparent rounded-[3px] bg-input placeholder:text-[18px] placeholder:font-light placeholder:text-placeholder-text outline-none"
                onChange={handleChange}
                value={data.name}
            />
            <input
                name="priority"
                type="number"
                placeholder="14"
                className="appearance-none w-[64px] py-[6px]  bg-input border border-transparent rounded-[3px] placeholder:text-[18px] placeholder:font-light placeholder:text-placeholder-text placeholder:text-center text-center outline-none"
                onChange={handleChange}
                value={data.priority ? data.priority : ''}
            />
            <button
                type="submit"
                className="text-gold border-2 rounded-[5px] border-gold py-[6px] w-[100px]"
            >
                Add
            </button>
        </form>
    );
}

export default Form;
