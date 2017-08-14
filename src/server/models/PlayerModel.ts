import { model, Schema, Document } from 'mongoose';

export interface FacebookAuthProps {
    tokenID;
}
export interface PlayerModel extends Document {
    uuid?: string;
    name?: string;
    email?: string;
    password?: string;
    facebook?: FacebookAuthProps;
}

const PlayerSchema = new Schema({

});

export const PlayerRecord = model<PlayerModel>('PlayerSchema', PlayerSchema);