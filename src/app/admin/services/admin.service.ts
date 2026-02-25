import { Injectable } from '@angular/core';
import { Player } from '../../../engine/player.interface';
import { of, Observable } from 'rxjs';
import { nanoid } from 'nanoid';

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
