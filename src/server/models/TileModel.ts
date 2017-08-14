import Tile from "../../engine/Tile";
import { model, Schema, Document, Model } from 'mongoose';

/**
 *
 */
export interface TileModel extends Tile, Document {
    uuid: string;
    x: number;
    y: number;
    z: number;
    city_id: string;
}

const TileSchema = new Schema({
    x: Number,
    y: Number,
    z: Number,
    city: Object
});

export const TileRecord:Model<TileModel> = model<TileModel>('TileSchema', TileSchema);