# AGENTS.md - Guidelines for Agentic Coding

## Build/Test/Lint Commands
- Build: `npm run build` (production) or `npm run start` (dev server)
- Lint: `npm run lint` or `npm run lint:fix` to auto-fix issues
- Test: `npm run test` (all tests) or `npm run test:watch` (watch mode)
- Run single test: `npx vitest run src/path/to/file.spec.ts`
- Format: `npm run format` to format all files with Prettier

## Code Style Guidelines
- **TypeScript**: Use strict typing, avoid `any`, prefer inference when obvious
- **Components**: Standalone with OnPush change detection, inline templates/styles
- **State**: Use signals (`signal()`, `computed()`) over observables when possible
- **Templates**: Use native control flow (`@if`, `@for`, `@switch`) not directives
- **Imports**: Group by source (Angular, third-party, app modules)
- **Naming**: kebab-case for files/selectors, PascalCase for classes, camelCase for methods
- **Error Handling**: Use typed error objects, handle errors at appropriate levels

## Angular Patterns
- Use `input()`/`output()` functions instead of decorators
- Use `inject()` instead of constructor injection
- Prefer reactive forms over template-driven forms
- Use class bindings instead of `ngClass`/`ngStyle`
- Components should have single responsibility