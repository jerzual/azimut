import uuid from 'uuid';

export interface Player {
    uuid: String;
    host: String;
    socketId?: String;
    createdAt: number;
    cityId?: String;
    levelId?: String;
}

export function playerFactory(): Player{
    return {
        uuid: uuid.v4(),
        host: 'localhost',
        createdAt: Date.now()
    }
}