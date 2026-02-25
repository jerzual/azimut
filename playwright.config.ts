import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './e2e',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env['CI'],
	/* Retry on CI only */
	retries: process.env['CI'] ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env['CI'] ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL resolved by the browser inside Docker (not the local test runner) */
		baseURL: 'http://server:4000',

		/* Connect to the remote Playwright browser running in Docker */
		connectOptions: {
			wsEndpoint: process.env['PW_TEST_CONNECT_WS_ENDPOINT'] || 'ws://127.0.0.1:3000/',
		},

		/* Visual feedback: capture screenshots, traces, and video */
		screenshot: 'on',
		trace: 'on',
		video: 'on',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		// {
		// 	name: 'firefox',
		// 	use: { ...devices['Desktop Firefox'] },
		// },

		// {
		// 	name: 'webkit',
		// 	use: { ...devices['Desktop Safari'] },
		// },
	],
});
