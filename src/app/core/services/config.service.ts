import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigurationSchema } from '../../../assets/config.schema';

/**
 * This is the only module that uses relative path to get host config.
 *
 */
@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	private readonly httpClient = inject(HttpClient);

	fetchConfig(): Observable<ConfigurationSchema> {
		return this.httpClient.get<ConfigurationSchema>('assets/data/config.json');
	}
}
