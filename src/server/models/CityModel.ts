import { model, Schema, Document } from 'mongoose';

import City from "../../world/City";
import Tile from "../../engine/Tile";
/**
 * A city is the main playground session where players play.
 * 
 * It serves as channelms to the communications, and as a root container for all data.
 */
export interface CityModel extends City, Document {
    width: number;
    height: number;
    tiles: Array<Array<Tile>>;
    players: Array<Object>;
}

const CitySchema = new Schema({
    width: Number,
    height: Number
});

export const CityRecord = model<CityModel>('CitySchema', CitySchema);
