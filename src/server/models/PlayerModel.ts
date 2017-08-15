import { model, Schema, Document } from 'mongoose';
import { Player } from '../../engine/Player';

export interface PlayerModel extends Player, Document {
    uuid: string;
    name?: string;
    host: String;
    socketId?: String;
    createdAt: number;
    cityId?: String;
    levelId?: String;
}

const PlayerSchema = new Schema({

});

export const PlayerRecord = model<PlayerModel>('PlayerSchema', PlayerSchema);