import mongoose from 'mongoose';

export interface IItem {
    _id: mongoose.Types.ObjectId;
    name: string;
    priority: number;
}

export type IItemPost = Omit<IItem, '_id'>;

export interface IItemUpdate {
    name?: string;
    priority: number;
}
