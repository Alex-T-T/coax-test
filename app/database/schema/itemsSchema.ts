import mongoose, { Schema } from 'mongoose';

export interface IItemDB {
    name: string;
    priority: number;
}

const itemSchema = new Schema(
    {
        name: String,
        priority: Number,
    },
    { timestamps: true }
);

export default mongoose.models['items']
    ? mongoose.model<IItemDB>('items')
    : mongoose.model<IItemDB>('items', itemSchema);
