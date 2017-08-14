import { Router, Request, Response, NextFunction } from "express";
import { PlayerService } from "../services/PlayerService";
import { PlayerModel, PlayerRecord } from "../models/PlayerModel";

export default class PlayerRoutes {
  router: Router;
  playerService: PlayerService;
  constructor(playerService: PlayerService) {
    this.playerService = playerService;
    this.router = Router();
  }
  getRouter() {
    this.router.post("/players", this.postPlayer);
    this.router.get("/players/:playerId", this.getPlayer);
    this.router.put("/players/:playerId", this.putPlayer);
    this.router.delete("/players/:playerId", this.deletePlayer);
    return this.router;
  }
  public getUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.id);
  }
  public postPlayer(req: Request, res: Response) {
    this.playerService
      .createPlayer(req.body)
      .then((player: PlayerModel) => {
        return res.status(201).send(player);
      })
      .catch((error: Error) => {
        return res.status(409).send(error);
      });
  }
  getPlayer(req: Request, res: Response) {
    this.playerService
      .retrievePlayer(req.params.name)
      .then((player: PlayerModel) => {
        if (player) {
          return res.send(player);
        } else {
          return res.sendStatus(404);
        }
      })
      .catch((error: Error) => {
        return res.status(500).send(error);
      });
  }
  getPlayers(req: Request, res: Response) {
    this.playerService
      .retrievePlayers()
      .then((players: Array<PlayerModel>) => {
        return res.send(players);
      })
      .catch((error: Error) => {
        return res.status(500).send(error);
      });
  }
  putPlayer(req: Request, res: Response) {
    this.playerService
      .updatePlayer(req.params.name, req.body)
      .then(() => {
        return res.sendStatus(200);
      })
      .catch((error: Error) => {
        return res.status(409).send(error);
      });
  }
  deletePlayer(req: Request, res: Response) {
    this.playerService
      .deletePlayer(req.params.name)
      .then(() => {
        return res.sendStatus(200);
      })
      .catch((error: Error) => {
        return res.status(500).send(error);
      });
  }
}
