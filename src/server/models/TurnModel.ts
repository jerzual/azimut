import { Turn } from '../../engine/Turn';
import { model, Schema, Document, Model } from 'mongoose';

/**
 *
 */
export interface TurnModel extends Turn, Document {
    uuid: string;
    timeout: number;
    nextPlayer: string;
    currentPlayer: string;
    createdAt: Date
}

const TurnSchema = new Schema({
    _id: String,
    timeout: Number,
    nextPlayerId: String,
    currentPlayerId: String,
    createdAt: Date
});

export const TurnRecord = model<TurnModel>('Turn', TurnSchema);
