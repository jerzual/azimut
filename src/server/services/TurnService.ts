import { Database, Core } from "../models/";
import { TurnRecord, TurnModel } from "../models/TurnModel";
import * as logger from "winston";
import { Injectable } from "../core/injectable";

@Injectable()
export class TurnService {
  models: Core;
  constructor(models: Core) {
    this.models = models;
  }
  createTurn(turnAttributes: TurnModel): Promise<TurnModel> {
    return TurnRecord.create(turnAttributes);
  }

  getTurn(uuid: string): Promise<TurnModel | null> {
    return TurnRecord.findById(uuid).exec();
  }

  retrieveTurns(): Promise<Array<TurnModel>> {
    return Promise.resolve([]);
  }

  updateTurn(name: string, turnAttributes: any): Promise<void> {
    return Promise.resolve();
  }

  deleteTurn(turnId: string): Promise<TurnModel> {
    return new TurnRecord().remove();
  }
}
