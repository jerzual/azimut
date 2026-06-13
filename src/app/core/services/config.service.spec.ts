import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ConfigService],
			imports: [RouterTestingModule, HttpClientTestingModule],
		});
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		const service: ConfigService = TestBed.inject(ConfigService);
		expect(service).toBeTruthy();
	});
	describe('fetchConfig()', () => {
		it('should make a relative requests to assets', () => {
			expect.assertions(1);
			const service: ConfigService = TestBed.inject(ConfigService);
			// execute
			service.fetchConfig().subscribe((result) => {
				expect(result).toBeDefined();
				httpMock.verify();
			});
			// return fake response
			const testRequest = httpMock.expectOne('assets/data/config.json');
			testRequest.flush({ backendUrl: 'test', databaseHost: 'test' });
		});
	});
});
