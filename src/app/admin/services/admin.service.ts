import { Injectable } from '@angular/core';
import { Player } from 'src/engine/Player';
import { of, Observable } from 'rxjs';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getUsers(): Observable<Partial<Player>> {
    return of({
      uuid: v4(),
      createdAt: 0,
    });
  }
}
