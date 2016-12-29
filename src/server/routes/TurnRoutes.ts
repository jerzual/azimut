import { Router, Request, Response, NextFunction } from 'express';
import { TurnService } from '../services/TurnService';
import { TurnInstance, TurnAttributes } from '../models/TurnModel';

export default class TurnRoutes {
  router: Router;
  turnService: TurnService;
  constructor(turnService: TurnService) {
    this.turnService = turnService;
    this.router = Router();
  }
  getRouter() {
    this.router.post('/turns', this.postTurn);
    this.router.get('/turns/:turnId', this.getTurn);
    this.router.put('/turns/:turnId', this.putTurn);
    this.router.delete('/turns/:turnId', this.deleteTurn);
    // this.router.get('/turns/:turnId/actions', this.getTurnActions);
    return this.router;
  }
  public getUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.id);
  }
  public postTurn(req: Request, res: Response) {
    this.turnService.createTurn(req.body).then((turn: TurnInstance) => {
      return res.status(201).send(turn);
    }).catch((error: Error) => {
      return res.status(409).send(error);
    });
  }
  getTurn(req: Request, res: Response) {
    this.turnService.retrieveTurn(req.params.name).then((turn: TurnInstance) => {
      if (turn) {
        return res.send(turn);
      } else {
        return res.sendStatus(404);
      }
    }).catch((error: Error) => {
      return res.status(500).send(error);
    });
  }
  getTurns(req: Request, res: Response) {
    this.turnService.retrieveTurns().then((turns: Array<TurnInstance>) => {
      return res.send(turns);
    }).catch((error: Error) => {
      return res.status(500).send(error);
    });
  }
  putTurn(req: Request, res: Response) {
    this.turnService.updateTurn(req.params.name, req.body).then(() => {
      return res.sendStatus(200);
    }).catch((error: Error) => {
      return res.status(409).send(error);
    });
  }
  deleteTurn(req: Request, res: Response) {
    this.turnService.deleteTurn(req.params.name).then(() => {
      return res.sendStatus(200);
    }).catch((error: Error) => {
      return res.status(500).send(error);
    });
  }
}
