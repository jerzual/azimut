import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import * as fromRoot from '../../reducers';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewGlobalError } from '../actions/core.actions';

@Injectable()
export class AzimutHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromRoot.State>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(new NewGlobalError(error));
        return throwError(error);
      }),
    );
  }
}
