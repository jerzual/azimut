import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { of, Observable } from 'rxjs';

import { Player } from '../../../engine/player.interface';

@Injectable({
	providedIn: 'root',
})
export class AdminService {
	getUsers(): Observable<Partial<Player>> {
		return of({
			uuid: nanoid(),
			createdAt: 0,
		});
	}
}
