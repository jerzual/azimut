import { nanoid } from 'nanoid';

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
		uuid: nanoid(),
		host: 'localhost',
		createdAt: Date.now(),
	};
}
