import { PlayerRecord, PlayerModel } from '../models/PlayerModel';
import { Model, Document } from "mongoose";
import * as logger from 'winston';

export class PlayerService {
  createPlayer(player: PlayerModel): Promise<PlayerModel> {
    return PlayerRecord.create(player);
  }

  retrievePlayer(id: string): Promise<PlayerModel | null> {
    return PlayerRecord.findById(id).exec();
  }

  retrievePlayers(): Promise<Array<PlayerModel>> {
    return PlayerRecord.find().exec();
  }

  updatePlayer(id: string, model: PlayerModel): Promise<any> {
    return PlayerRecord.update({ "_id": id }, model).exec();
  }

  deletePlayer(id: string): Promise<void> {
    return PlayerRecord.remove({ "_id": id }).exec();
  }
}

export default PlayerService;