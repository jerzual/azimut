# TODOLIST

## Technical

- [ ] finish github pipelines
  - [ ] build, tests, lint, format checks on PR
  - [ ] deploy to staging environments
  - [ ] deploy to production environments
- [ ] angular 20 upgrade
- [ ] add rxdb + couchdb plugin

## Functional

- [ ] add user feature, type: "guest" | "known" | "admin"
- [ ] add game feature and collection
- [ ] party of characters and action points
- [ ] character: movement, actions queues and playing
- [ ] inventory, pickup, drop

## UI

- [ ] design system, buttons, svg trapeze, neon box shadow
- [ ] 3D tiles + camera
  - [ ] floor tiles
  - [ ] wall tiles
  - [ ] door tiles
- [ ] widgets system with drag and drop
  - [ ] dialog widget with secondary router outlet
- [ ] fixed widgets
  - [ ] minimap
  - [ ] character-select (+stats)
  - [ ] hacking screen
  - [ ] fight screen
  - [ ] dialog screen
- [ ] movable widgets
  - [ ] console
  - [ ] inventory
  - [ ] action queue
  - [ ] admin panel
  - [ ] character sheet

## Engine Systems (empty classes, no methods)

- [ ] **MovementSystem** (`src/engine/systems/MovementSystem.ts`)
- [ ] **AudioSystem** (`src/engine/systems/AudioSystem.ts`)
- [ ] **DialogueSystem** (`src/engine/systems/DialogueSystem.ts`)

## Engine Behaviors (declared but not implemented)

- [ ] **Drawable** (`src/engine/behaviors/Drawable.ts`) - `draw()` is empty
- [ ] **Fightable** (`src/engine/behaviors/Fightable.ts`) - `reduceHealth()` and `execute()` are empty
- [ ] **Movable** (`src/engine/behaviors/Movable.ts`) - class declaration only
- [ ] **PlayerAware** (`src/engine/behaviors/PlayerAware.ts`) - empty class
- [ ] **Follower** (`src/engine/behaviors/Follower.ts`) - empty class
- [ ] **EnvironmentAware** (`src/engine/behaviors/EnvironmentAware.ts`) - only a comment
- [ ] **PathFollower** (`src/engine/behaviors/PathFollower.ts`) - empty file
- [ ] **HeroChaser** (`src/engine/behaviors/HeroChaser.ts`) - empty file

## Engine Classes (incomplete)

- [ ] **Path** (`src/engine/Path.ts`) - constructor only, no pathfinding methods
- [ ] **Tile** (`src/engine/Tile.ts`) - `key` setter only has `console.log()`

## World Generation Builders (stub methods)

- [ ] **CityBuilder** (`src/world/builder/city.builder.ts`) - `digMainRoads()` and `placeBiomes()` empty
- [ ] **LevelBuilder** (`src/world/builder/level.builder.ts`) - completely empty class
- [ ] **RoadDigger** (`src/world/builder/road-digger.builder.ts`) - `digMainRoads()` and `placeBiomes()` empty
- [ ] **SquareBuilder** (`src/world/builder/square.builder.ts`) - `placeSquare()` and `placeBiomes()` empty
- [ ] **StoryBuilder** (`src/world/builder/story.builder.ts`) - extends RandomBuilder with no methods
- [ ] **HeroBuilder** (`src/world/builder/hero.builder.ts`) - `hair()`, `facialHair()`, `skinColor()`, `pantsShape()`, `pantsColor()` all empty

## Angular Services (stubs)

- [ ] **GameService** (`src/app/game/services/game.service.ts`) - `newGame()` and `quitGame()` are empty
- [ ] **KeyboardService** (`src/app/core/services/keyboard.service.ts`) - empty, no input handling
- [ ] **GamepadService** (`src/app/core/services/gamepad.service.ts`) - empty, TODO: "provide gamepad wrapper"
- [ ] **ConfigRepository** (`src/app/core/services/config.repository.ts`) - empty, no persistence logic
- [ ] **AdminService** (`src/app/admin/services/admin.service.ts`) - stub

## Angular Components (placeholder templates)

- [ ] **GameComponent** (`src/app/game/components/game/game.component.ts`) - `<h1>Game</h1>`
- [ ] **GamesListComponent** (`src/app/game/containers/games-list/games-list.component.ts`) - `<h1>Games List</h1>`
- [ ] **AdminRootComponent** (`src/app/admin/components/admin-root/admin-root.component.ts`) - `<p>admin-root works!</p>`
- [ ] **WidgetsContainerComponent** (`src/app/ui/containers/widgets-container/widgets-container.component.ts`) - `<p>widgets-container works!</p>`

## 3D Scene

- [ ] **SceneComponent** (`src/app/scene/components/scene/scene.component.ts`) - only renders a test box, no game world

## Tests

All spec files only contain "should be created" smoke tests:

- [ ] Meaningful tests for engine classes (Actor, Action, Item, Player)
- [ ] Tests for behaviors
- [ ] Tests for world generation builders
- [ ] Tests for Angular services (GameService, KeyboardService, GamepadService)
- [ ] Tests for Angular stores (GameStore, UserInterfaceStore)
- [ ] Tests for Angular components
- [ ] Fix empty test description in `src/world/city.class.spec.ts`

## Other

- [ ] **Core barrel export** (`src/app/core/index.ts`) - empty file, no exports
