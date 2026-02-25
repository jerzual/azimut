# Plan: Isometric 3D Terrain View in Scene

## Context

The `GameComponent` generates a 512×512 city with biome-colored tiles and renders a 2D canvas minimap. The 3D scene (`<app-scene>`) currently shows a placeholder purple box. We need to render the city terrain as an isometric 3D view in the scene — with elevation-based height and biome colors — while keeping the 2D minimap as a UI overlay.

The main challenge: `GameComponent` lives in `<router-outlet>` (UI overlay) while `SceneGraphComponent` lives in `<ngt-canvas>` (app root level) — no parent-child relationship, so city data must go through a shared store.

## Changes

### 1. Extract biome colors to shared constant

**NEW** `src/engine/biome-colors.const.ts`

Move the `BIOME_COLORS` record out of `GameComponent` into a shared constant file (following `*.const.ts` convention). Both the 2D minimap and 3D terrain need these.

### 2. Add city to GameStore

**MODIFY** `src/app/game/services/game.store.ts`

- Add `city: City | null` to `State` interface
- Add initial value `city: null` in `withState`
- Add `setCity(city: City | null)` method

### 3. Wire GameService to store city

**MODIFY** `src/app/game/services/game.service.ts`

- Call `this.gameStore.setCity(city)` after building the city
- In `quitGame()`, call `this.gameStore.setCity(null)`

### 4. Update GameComponent to use store for city

**MODIFY** `src/app/game/components/game/game.component.ts`

- Remove local `BIOME_COLORS` definition, import from `src/engine/biome-colors.const.ts`
- Remove local `city` signal
- Inject `GameStore`, read `city` from `this.gameStore.city()` in `drawMinimap()`

### 5. Create TerrainComponent (core rendering)

**NEW** `src/app/scene/components/terrain/terrain.component.ts`

Single-mesh terrain approach for 262K tiles:

- **Geometry**: `PlaneGeometry(512, 512, 511, 511)` → 262K vertices, one per tile. Set vertex Z from `tile.elevation` (scaled ×30 for visible height), then rotate the mesh `-PI/2` around X so Z becomes up.
- **Texture**: `DataTexture(Uint8Array, 512, 512, RGBAFormat)` — 4 bytes per pixel from biome colors.
- **Material**: `MeshStandardMaterial` with the DataTexture + `DoubleSide` — needs lights to show terrain depth from elevation.
- Uses `computed()` signal reading `gameStore.city()` → returns `{ geometry, texture }` or null.
- Template: `@if (terrainData()) { <ngt-mesh ...> }` with `CUSTOM_ELEMENTS_SCHEMA`.

Tile order matches: `LevelBuilder` iterates `for y { for x }` (row-major top-to-bottom) and `PlaneGeometry` generates vertices the same way.

### 6. Update SceneComponent for isometric camera + terrain

**MODIFY** `src/app/scene/components/scene/scene.component.ts`

**SceneComponent**:
- Add `[orthographic]="true"` to `<ngt-canvas>` (angular-three has native support)
- Add `[camera]` input with position `[300, 300, 300]` for isometric angle, zoom ~1
- Add `[lookAt]="[0, 0, 0]"` to point at terrain center

**SceneGraphComponent**:
- Replace placeholder box with `<app-terrain />`
- Add lights: `<ngt-ambient-light>` + `<ngt-directional-light>`
- `extend()` new Three.js classes: `PlaneGeometry`, `MeshStandardMaterial`, `AmbientLight`, `DirectionalLight`

### 7. Update tests

| File | Change |
|------|--------|
| `game.store.spec.ts` | Test `setCity` method |
| `game.service.spec.ts` | Verify `setCity` called |
| `game.component.spec.ts` | Mock `GameStore` with city, remove local `city()` assertions |
| `scene.component.spec.ts` | Minimal — just ensure it still creates |
| **NEW** `terrain.component.spec.ts` | Mock `GameStore`, verify geometry/texture creation with small 4×4 city |

## File Summary

| File | Action |
|------|--------|
| `src/engine/biome-colors.const.ts` | CREATE |
| `src/app/game/services/game.store.ts` | MODIFY |
| `src/app/game/services/game.service.ts` | MODIFY |
| `src/app/game/components/game/game.component.ts` | MODIFY |
| `src/app/scene/components/terrain/terrain.component.ts` | CREATE |
| `src/app/scene/components/scene/scene.component.ts` | MODIFY |
| `src/app/scene/components/terrain/terrain.component.spec.ts` | CREATE |
| Various existing `*.spec.ts` files | MODIFY |

## Verification

1. `pnpm test` — all tests pass
2. `pnpm lint` — clean
3. `pnpm start` → click "New Game" → see isometric terrain in 3D scene + minimap in overlay
