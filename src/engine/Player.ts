import { v4 } from 'uuid';

export interface Player {
    uuid: string;
    host?: string;
    socketId?: string;
    createdAt: number;
    cityId?: string;
    levelId?: string;
}

export function playerFactory(): Player {
    return {
        uuid: v4(),
        host: 'localhost',
        createdAt: Date.now()
    };
}
