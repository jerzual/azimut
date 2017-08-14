import { model, Schema, Document } from 'mongoose';
import { Item } from '../../engine/Item';

export interface ItemModel extends Item, Document{
    uuid: string;
    name: string;
    ap: number;
    hp: number;
    description: string;
}

const ItemSchema = new Schema({
    
});

export const ItemRecord = model<ItemModel>('ItemSchema', ItemSchema);