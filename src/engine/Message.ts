/**
 * A message is a dialogue that can be exchanged between NPC and players.displayed above their head.
 */
export interface Message {
  uuid: string;
  fromActorId: string;
  inCityId: string;
  inLevelId: string;
  toActor: string;
  createdAt: Date;
}
