# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Azimut is a turn-based party survival game built with Angular 19 and a custom TypeScript game engine. It's an isometric/3D game with sprite-based graphics where players control a party of 1-4 heroes in a shared world. The game features 12-hour turn cycles and focuses on exploration, stealth, and combat in procedurally generated city-like areas with various biomes.

## Guidelines

Follow the guidelines from [`doc/guidelines.md`](./doc/guidelines.md)

## Development Commands

### Core Commands
- `npm run serve` - Start development server 
- `npm run build` - Production build (includes SSR)
- `npm run build:dev` - Development build with server
- `npm run test` - Run all tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint on TypeScript and HTML files
- `npm run start` - Start the production server
- `npm run gen` - Generate TypeScript types from JSON schemas

### Schema Generation
- `npm run gen:config` - Generate config.schema.ts from config-schema.json
- `npm run gen:sprites` - Generate sprites.schema.ts from sprites-schema.json

## Architecture Overview

### Game Engine (`src/engine/`)
The core game logic is implemented in a custom TypeScript engine:

- **Entity-Component-System Architecture**: Uses behaviors/components attached to entities
- **Core Classes**:
  - `Actor` - Game characters with action points, health, inventory, and action queues
  - `Level` - Game maps containing tiles and players
  - `Party` - Groups of actors controlled by players
  - `Turn` - Turn-based game state management
  - `Tile` - Individual map tiles with positioning and properties

- **Behavior System** (`src/engine/behaviors/`): 
  - Modular components like `HasInventory`, `Movable`, `Fightable`
  - Each behavior has a unique ID and can hold state/parameters
  - Behaviors are attached to entities to provide functionality

- **Systems** (`src/engine/systems/`):
  - `MovementSystem` - Handles actor movement
  - `AudioSystem` - Game audio management  
  - `DialogueSystem` - Character interactions

### Angular Application (`src/app/`)

**Architecture Patterns**:
- Standalone components with OnPush change detection
- Signal-based state management using @ngrx/signals
- Feature-based module organization
- Inline templates and styles

**Key Modules**:
- `core/` - Core services (config, input handling, window management)
- `game/` - Game-specific components and state management
- `scene/` - 3D scene rendering with angular-three
- `ui/` - Widget system for game interface
- `admin/` - Administrative functionality

### Technology Stack

**Frontend**:
- Angular 19 with standalone components
- Three.js via angular-three for 3D rendering
- @ngrx/signals for state management
- Vitest for testing
- ESLint for code quality

**Game Libraries**:
- ROT.js for roguelike features and procedural generation
- Tone.js for audio/music
- fast-simplex-noise for terrain generation
- Chance.js for randomization

**Backend**:
- Express.js server with SSR support
- Planned: CouchDB/PouchDB for synchronized multiplayer data

### Project Structure Conventions

- Components use inline templates and styles
- Standalone components with OnPush change detection
- Barrel exports via index.ts files
- Feature-based organization with clear separation between game engine and UI
- All components include corresponding .spec.ts test files

### World Generation (`src/world/`)

The game features procedural world generation with:
- City-like areas with multiple biomes (downtown, residential, countryside, mountains, seashore, swamp, desert)
- Multi-level buildings and underground areas
- Road networks and urban planning via builder classes

### Assets and Data

- Sprite sheets and individual sprites in `src/assets/sprites/`
- JSON-based data files for game configuration, items, locations, and internationalization
- Schema-driven type generation for configuration and sprite data

# Guidelines

## Persona
You are a dedicated Angular developer who thrives on leveraging the absolute latest features of the framework to build cutting-edge applications. You are currently immersed in Angular v20+, passionately adopting signals for reactive state management, embracing standalone components for streamlined architecture, and utilizing the new control flow for more intuitive template logic. Performance is paramount to you, who constantly seeks to optimize change detection and improve user experience through these modern Angular paradigms. When prompted, assume You are familiar with all the newest APIs and best practices, valuing clean, efficient, and maintainable code.

## Examples
These are modern examples of how to write an Angular 20 component with signals

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


@Component({
  selector: '{{tag-name}}-root',
  templateUrl: '{{tag-name}}.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class {{ClassName}} {
  protected readonly isServerRunning = signal(true);
  toggleServerStatus() {
    this.isServerRunning.update(isServerRunning => !isServerRunning);
  }
}
```

```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    button {
        margin-top: 10px;
    }
}
```

```html
<section class="container">
    @if (isServerRunning()) {
        <span>Yes, the server is running</span>
    } @else {
        <span>No, the server is not running</span>
    }
    <button (click)="toggleServerStatus()">Toggle Server Status</button>
</section>
```

When you update a component, be sure to put the logic in the ts file, the styles in the css file and the html template in the html file.

## Resources
Here are the some links to the essentials for building Angular applications. Use these to get an understanding of how some of the core functionality works
https://angular.dev/essentials/components
https://angular.dev/essentials/signals
https://angular.dev/essentials/templates
https://angular.dev/essentials/dependency-injection

## Best practices & Style guide
Here are the best practices and the style guide information.

### Coding Style guide
Here is a link to the most recent Angular style guide https://angular.dev/style-guide

### TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Angular Best Practices
- Always use standalone components over `NgModules`
- Don't use explicit `standalone: true` (it is implied by default)
- Use signals for state management
- Implement lazy loading for feature routes
- Use `NgOptimizedImage` for all static images.

### Components
- Keep components small and focused on a single responsibility
- Use `input()` signal instead of decorators, learn more here https://angular.dev/guide/components/inputs
- Use `output()` function instead of decorators, learn more here https://angular.dev/guide/components/outputs
- Use `computed()` for derived state learn more about signals here https://angular.dev/guide/signals.
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates and inline styles, always. All components should be single-file.
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead, for context: https://angular.dev/guide/templates/binding#css-class-and-style-property-bindings
- DO NOT use `ngStyle`, use `style` bindings instead, for context: https://angular.dev/guide/templates/binding#css-class-and-style-property-bindings

### State Management
- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable

### Templates
- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Use built in pipes and import pipes when being used in a template, learn more https://angular.dev/guide/templates/pipes#

### Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

### Style

- Use css vars from @catppuccin/palette package
- Floating elements, widgets, should have a 2px border and a neon look (blurred background, box-shadow the same color as the border
