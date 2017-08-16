// constructs a THREE.js scene from world objects.
import { Scene, SceneLoader, ArcRotateCamera, Sprite } from "babylonjs";
import ViewTile from "./ViewTile";

export default class SceneBuilder {
  scene: Scene;
  camera: ArcRotateCamera;
  sprites: Array<Sprite>;
  tiles: Array<ViewTile>;
  constructor(scene:Scene) {
    this.scene = scene;
    this.tiles = [];
    this.sprites = [];
  }
  build() {
    return this.scene;
  }
}
