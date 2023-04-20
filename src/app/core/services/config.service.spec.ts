import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { ConfigService } from './config.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfigService', () => {
	const baseHref = '/fr/';
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ConfigService],
			imports: [RouterTestingModule, HttpClientTestingModule],
		});
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		const service: ConfigService = TestBed.get(ConfigService);
		expect(service).toBeTruthy();
	});
	describe('fetchConfig()', () => {
		it('should make a relative requests to assets', (done) => {
			const service: ConfigService = TestBed.get(ConfigService);
			// execute
			service.fetchConfig().subscribe((result) => {
				expect(result).toBeDefined();
				httpMock.verify();
				done();
			});
			// return fake response
			httpMock
				.expectOne('assets/data/config.json')
				.flush({ backendUrl: 'test', databaseHost: 'test' });
		});
	});
});
