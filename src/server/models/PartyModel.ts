import { model, Schema, Document } from 'mongoose';
import  { Actor } from '../../engine/Actor';
import { Party } from '../../engine/Party';

export interface PartyModel extends Party, Document{
    uuid: string;
    name: string;
    members:Array<Actor>;
}

const PartySchema = new Schema({
    _id: String,
    members: Array,

});

export const PartyRecord = model<PartyModel>('PartySchema', PartySchema);