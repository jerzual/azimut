import { nanoid } from 'nanoid';

export interface Player {
    uuid: string;
    host?: string;
    name?: string;
    secret?: string;
    socketId?: string;
    createdAt: number;
    updatedAt?: number;
    deleted: boolean;
}

export function playerFactory(): Player {
    return {
        uuid: nanoid(),
        host: 'localhost',
        createdAt: Date.now(),
        deleted: false,
    };
}
