import { model, Schema, Document } from 'mongoose';
import Action from '../../engine/Action';

export interface ActionModel extends Action, Document {
    createdAt: Date;
    name: String;
    payload: any;
}

const ActionSchema = new Schema({
    _id: String,
    createdAt: Date,
    name: String,
    payload: Object
});

export const ActionRecord = model<ActionModel>('ActionSchema', ActionSchema);