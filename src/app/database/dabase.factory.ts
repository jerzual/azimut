import {
  RxDatabase,
  RxDatabaseCreator,
  createRxDatabase,
  addRxPlugin,
} from 'rxdb';
import { InjectionToken } from '@angular/core';
import { AzimutDatabaseCollections } from './collections';

import * as PouchDBAdapterInMemory from 'pouchdb-adapter-memory';
import * as PouchDBAdapterIndexedDB from 'pouchdb-adapter-idb';
/**
 * Injection token for RxDB configuration.
 * Allows to pass in memory or real indexed db config depending on context.
 */
export const RXDB_CONFIG: InjectionToken<RxDatabaseCreator> = new InjectionToken<
  RxDatabaseCreator
>('RXDB_CONFIG');

/**
 * RxDb azimut database instance
 */
export const RXDB_DATABASE: InjectionToken<RxDatabase<
  AzimutDatabaseCollections
>> = new InjectionToken<RxDatabase<AzimutDatabaseCollections>>('RXDB_DATABASE');

export async function createDatabase(
  config?: RxDatabaseCreator,
): Promise<RxDatabase<AzimutDatabaseCollections>> {
  addRxPlugin(PouchDBAdapterInMemory);
  addRxPlugin(PouchDBAdapterIndexedDB);
  return await createRxDatabase<AzimutDatabaseCollections>({
    ...config,
    name: 'azimut',
    multiInstance: true, // <- multiInstance (optional, default: true)
    options: {
      queryChangeDetection: false, // <- queryChangeDetection (optional, default: false) });
    },
  });
}
