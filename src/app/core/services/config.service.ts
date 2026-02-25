import { Injectable, inject } from '@angular/core';
import { ConfigurationSchema } from '../../../assets/config.schema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
