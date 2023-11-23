import { Dispatch, SetStateAction } from 'react';
import { IItem } from '../api/items/type';
import ListItem from './ListItem';

interface IListProps {
    listItems: IItem[];
    setListItems: Dispatch<SetStateAction<IItem[]>>;
}

function List({ listItems, setListItems }: IListProps) {
    return listItems.length ? (
        <ul className="space-y-[30px]">
            {listItems.map((item: IItem) => {
                return (
                    <ListItem
                        key={item._id.toString()}
                        data={item}
                        setListItems={setListItems}
                    />
                );
            })}
        </ul>
    ) : (
        <p>List is empty, yet</p>
    );
}

export default List;
