import { Database, Models } from '../models/';
import { TurnInstance, TurnAttributes, TurnModel} from '../models/TurnModel';
import { Transaction, Sequelize} from 'sequelize';
import * as logger from 'winston';

export class TurnService {
    sequelize:Sequelize;
    turnAccess:TurnModel;
    constructor(sequelize:Sequelize,models:Models){
        this.sequelize = sequelize;
        this.turnAccess = models.Turn
    }
  createTurn(turnAttributes: TurnAttributes): Promise<TurnInstance> {
    let promise = new Promise<TurnInstance>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.turnAccess.create(turnAttributes).then((turn: TurnInstance) => {
          logger.info(`Created turn with id ${turnAttributes.uuid}.`);
          resolve(turn);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrieveTurn(uuid: string): Promise<TurnInstance> {
    let promise = new Promise<TurnInstance>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.turnAccess.findOne({where: {uuid}}).then((turn: TurnInstance) => {
          if (turn) {
            logger.info(`Retrieved turn with id ${uuid}.`);
          } else {
            logger.info(`Turn with id ${uuid} does not exist.`);
          }
          resolve(turn);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrieveTurns(): Promise<Array<TurnInstance>> {
    let promise = new Promise<Array<TurnInstance>>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.turnAccess.findAll().then((turns: Array<TurnInstance>) => {
          logger.info("Retrieved all turns.");
          resolve(turns);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updateTurn(name: string, turnAttributes: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.turnAccess.update(turnAttributes, {where: {name: name}})
          .then((results: [number, Array<TurnInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated turn with name ${name}.`);
          } else {
            logger.info(`Turn with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  deleteTurn(name: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.turnAccess.destroy({where: {name: name}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted turn with name ${name}`);
          } else {
            logger.info(`Turn with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }
}

export default TurnService;