import { Injectable } from '@angular/core';
import { ConfigurationSchema } from 'src/assets/config';
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
  constructor(private readonly httpClient: HttpClient) {}

  fetchConfig(): Observable<ConfigurationSchema> {
    return this.httpClient.get<ConfigurationSchema>('assets/data/config.json');
  }
}
