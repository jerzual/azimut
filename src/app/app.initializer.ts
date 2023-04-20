import { Store } from '@ngrx/store';
import { take, filter } from 'rxjs/operators';

import { InitializerStart, InitializerEnd } from './core/actions/core.actions';
import { LoadConfig } from './core/actions/config.actions';
import * as fromRoot from './reducers';

/**
 * App initializer
 * @param store ngrx store object
 */
export function initApplication(store: Store<fromRoot.State>): () => void {
	return () =>
		new Promise((resolve, reject) => {
			store.dispatch(new InitializerStart());
			store.dispatch(new LoadConfig());
			store
				.select((state: fromRoot.State) => state.config)
				.pipe(
					filter((config) => !!config && !!config.values),
					take(1),
				)
				.subscribe(
					() => {
						store.dispatch(new InitializerEnd());
						resolve(true);
					},
					(error) => reject(error),
				);
		});
}
