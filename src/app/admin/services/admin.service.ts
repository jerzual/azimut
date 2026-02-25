import { Injectable } from '@angular/core';
import { Player } from '../../../engine/Player';
import { of, Observable } from 'rxjs';
import { nanoid } from 'nanoid';

@Injectable({
	providedIn: 'root',
})
export class AdminService {
	constructor() {}

	getUsers(): Observable<Partial<Player>> {
		return of({
			uuid: nanoid(),
			createdAt: 0,
		});
	}
}
