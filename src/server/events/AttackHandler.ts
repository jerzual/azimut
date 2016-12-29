import * as SocketIO from 'socket.io';
import * as logger from 'winston';

export default class AttackHandler{
  
  constructor(server:SocketIO.Server){
    server.on('attack/:actorId/:targetId', this.onAttack);
  }
  onAttack(socket:SocketIO.Socket){

  }
  onDefend(socket:SocketIO.Socket){
    
  }
}
