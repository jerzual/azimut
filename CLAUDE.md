# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Azimut is a turn-based party survival game built with Angular 19 and a custom TypeScript game engine. Players control a party of 1-4 heroes in a shared world with 12-hour turn cycles, exploring procedurally generated city-like areas with various biomes. Rendering uses Three.js via angular-three for isometric/3D sprite-based graphics.

## Guidelines

Follow the guidelines from [`doc/guidelines.md`](./doc/guidelines.md)

## Development Commands

**Package manager is `pnpm`**. Requires Node >= 22.

### Local Development
- `pnpm start` - Start Angular dev server (via `ng serve`)
- `pnpm build` - Production build with SSR
- `pnpm serve` - Start the production SSR server (`node dist/server/server.mjs`)

### Testing
- `pnpm test` - Run all tests with Vitest (via @analogjs/vitest-angular)
- `pnpm test:watch` - Run tests in watch mode
- `npx vitest run src/path/to/file.spec.ts` - Run a single test file

### Code Quality
- `pnpm lint` - Run ESLint on TypeScript and HTML files
- `pnpm lint:fix` - Auto-fix lint issues
- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check formatting without modifying

### Schema Generation
- `pnpm gen` - Generate TypeScript types from all JSON schemas
- `pnpm gen:config` - Generate `config.schema.ts` from `config-schema.json`
- `pnpm gen:sprites` - Generate `sprites.schema.ts` from `sprites-schema.json`

### Docker / Full Stack
- `make start` - Start docker-compose stack (CouchDB + server + Playwright)
- `make stop` - Stop docker containers
- `make build` - Build the app (installs deps if needed)
- `make init` - Initialize CouchDB collections
- `make test` - Run Playwright e2e tests against docker stack

## Architecture Overview

### Game Engine (`src/engine/`)

Custom TypeScript engine using an Entity-Behavior pattern:

- **Entity** - Base class with `uuid` (nanoid) and a `behaviors[]` array. All game objects extend this.
- **Actor** - Extends Entity. Has `actionPoints`, `life`, `items`, `actionsQueue`, and `status` (PATROLLING, FIGHTING, IDLING, DEAD). Created via `actorFactory()`.
- **Behavior** - Components attached to entities. Each has a `type` enum, `uuid`, `execute()` method, and an `agent` object holding state. Created via `behaviorFactory()`. Types: EnvironmentAware, Fightable, Droppable, Pickupable, Pathfollower, ActionPoints, HasInventory, HasHealth.
- **Level** - Map container with `tiles[]`, `width`, `height`, and `LevelType` enum (CAVERN, BUILDING_FLOOR, OPEN_FIELD, URBAN_AREA).
- **Party** - Groups of actors controlled by a player.
- **Turn** - Turn-based game state management.
- **Systems** (`src/engine/systems/`) - MovementSystem, AudioSystem, DialogueSystem.

### World Generation (`src/world/`)

- **City** class contains multiple `Level` instances (min 512px size).
- **Builders** (`src/world/builder/`): `city.builder`, `level.builder`, `hero.builder`, `road-digger.builder`, `square.builder`, `story.builder`, `random.builder`.
- Biomes: downtown, residential, countryside, mountains, seashore, swamp, desert.

### Angular Application (`src/app/`)

**Routing** (lazy-loaded):
- `''` → HomeComponent
- `'games'` → game routes (`''` → GamesListComponent, `':id'` → GameComponent)
- `'admin'` → admin routes (`''` → AdminRootComponent)

**State Management** - @ngrx/signals with `signalStore`:
- `GameStore` (`src/app/game/services/game.store.ts`) - Entity collection for games, uses `withEntities<Game>()`, `withDevtools()`, computed signals for selection/sorting.
- `UserInterfaceStore` (`src/app/ui/services/user-interface.store.ts`) - UI state (overlay, dialog, dimensions) + widget entities.

**Feature Areas**:
- `core/` - Services: config (with ConfigRepository), keyboard input, gamepad input, window management
- `game/` - Game lifecycle: store, service, list/play components
- `scene/` - Three.js 3D rendering via angular-three (`NgtCanvas`, `extend()`, `CUSTOM_ELEMENTS_SCHEMA` for ngt-* elements)
- `ui/` - Widget system: draggable widgets with container management
- `admin/` - Admin dashboard

### Technology Stack

- **3D**: Three.js via angular-three (custom elements with `ngt-` prefix)
- **State**: @ngrx/signals (`signalStore`, `withEntities`, `withState`, `withComputed`, `withMethods`)
- **Roguelike**: ROT.js for procedural generation
- **Audio**: Tone.js + Tonal for music/sound
- **Noise**: fast-simplex-noise for terrain
- **Random**: Chance.js for seeded randomization
- **Backend**: Fastify SSR server + CouchDB (via docker-compose)
- **Testing**: Vitest (via @analogjs/vitest-angular) + Playwright for e2e

### Build & Tooling

- **Angular CLI** with `@angular-devkit/build-angular:application` builder
- **SSR enabled**: output mode `server`, entry points `main.server.ts` and `server.ts`
- **Schematics defaults**: `inlineStyle: true`, `inlineTemplate: true`, `standalone: true`, `changeDetection: 'OnPush'`
- **TypeScript**: ES2022 target, strict mode, strict Angular templates/injection
- **ESLint**: Flat config (`eslint.config.mjs`), angular-eslint + typescript-eslint, component prefix `app`
- **Prettier**: For formatting

### Conventions

- All components are single-file: inline templates and inline styles
- Standalone components with OnPush change detection
- Barrel exports via `index.ts` files
- Engine classes use PascalCase filenames; Angular follows kebab-case
- Sprite sheets and game data in `src/assets/` with JSON schema-driven type generation
