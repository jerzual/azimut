import { model, Schema, Document } from 'mongoose';
import Actor from '../../engine/Actor';
/**
 * an Actor is something that can move and drop objects, player included.
 */
export interface ActorModel extends Actor, Document {
    uuid: string;
    actionPoints: number;
    lifePoints: number;
    items: Array<any>;
}

const ActorSchema = new Schema({

});

export const ActorRecord = model('ActorSchema', ActorSchema);