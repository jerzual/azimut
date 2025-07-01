// @ts-check

// Allows us to bring in the recommended core rules from eslint itself
import pkg from '@eslint/js';
const { configs } = pkg;
// Allows us to use the typed utility for our config, and to bring in the recommended rules for TypeScript projects from typescript-eslint
import { config, configs as tsConfigs } from 'typescript-eslint';

// Allows us to bring in the recommended rules for Angular projects from angular-eslint
import { configs as ngConfigs, processInlineTemplates } from 'angular-eslint';

// Export our config array, which is composed together thanks to the typed utility function from typescript-eslint
export default config(
	{
		// Everything in this config object targets our TypeScript files (Components, Directives, Pipes etc)
		files: ['**/*.ts'],
		extends: [
			// Apply the recommended core rules
			configs.recommended,
			// Apply the recommended TypeScript rules
			...tsConfigs.recommended,
			// Optionally apply stylistic rules from typescript-eslint that improve code consistency
			...tsConfigs.stylistic,
			// Apply the recommended Angular rules
			...ngConfigs.tsRecommended,
		],
		// IMPORTANT: Set the custom processor to enable inline template linting
		// This allows your inline Component templates to be extracted and linted with the same
		// rules as your external .html template files
		processor: processInlineTemplates,
		// Override specific rules for TypeScript files (these will take priority over the extended configs above)
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
		},
	},
	{
		// Everything in this config object targets our HTML files (both external template files,
		// AND inline templates thanks to the processor set in the TypeScript config above)
		files: ['**/*.html'],
		extends: [
			// Apply the recommended Angular template rules
			...ngConfigs.templateRecommended,
			// Apply the Angular template rules which focus on accessibility of our apps
			...ngConfigs.templateAccessibility,
		],
		rules: {},
	},
);
