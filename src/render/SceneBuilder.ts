// constructs a THREE.js scene from world objects.
import { Scene, SceneLoader, ArcRotateCamera, Sprite } from "babylonjs";
import ThreeTile from "./ThreeTile";

export default class SceneBuilder {
  scene: Scene;
  camera: ArcRotateCamera;
  sprites: Array<Sprite>;
  tiles: Array<ThreeTile>;
  constructor(scene:Scene) {
    this.scene = scene;
    this.tiles = [];
    this.sprites = []
  }
  build() {
    return this.scene;
  }
}
