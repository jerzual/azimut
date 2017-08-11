import { PlayerAttributes, PlayerInstance } from '../models/PlayerModel';
import { Transaction } from "sequelize";
import { Models, Database } from '../models/index';
import * as logger from 'winston';
import * as Sequelize from 'sequelize';

export class PlayerService{
    sequelize:Sequelize.Sequelize
    models:Models;
  constructor(sequelize:Sequelize.Sequelize){
      this.sequelize = sequelize;
      this.models = new Database(sequelize).getModels();
  }
  createPlayer(PlayerProps: PlayerAttributes): Promise<PlayerInstance> {
    let promise = new Promise<PlayerInstance>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.models.Player.create(PlayerProps).then((Player: PlayerInstance) => {
          logger.info(`Created Player with name ${PlayerProps.name}.`);
          resolve(Player);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrievePlayer(name: string): Promise<PlayerInstance> {
    let promise = new Promise<PlayerInstance>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.models.Player.findOne({where: {name: name}}).then((Player: PlayerInstance) => {
          if (Player) {
            logger.info(`Retrieved Player with name ${name}.`);
          } else {
            logger.info(`Player with name ${name} does not exist.`);
          }
          resolve(Player);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrievePlayers(): Promise<Array<PlayerInstance>> {
    let promise = new Promise<Array<PlayerInstance>>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.models.Player.findAll().then((Players: Array<PlayerInstance>) => {
          logger.info("Retrieved all Players.");
          resolve(Players);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updatePlayer(name: string, PlayerProps: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.models.Player.update(PlayerProps, {where: {name: name}})
          .then((results: [number, Array<PlayerInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated Player with name ${name}.`);
          } else {
            logger.info(`Player with name ${name} does not exist.`);
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

  deletePlayer(name: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      this.sequelize.transaction((t: Transaction) => {
        return this.models.Player.destroy({where: {name: name}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted Player with name ${name}`);
          } else {
            logger.info(`Player with name ${name} does not exist.`);
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

