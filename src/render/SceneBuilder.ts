// constructs a THREE.js scene from world objects.
import * as THREE from "three";
import ThreeTile from "./ThreeTile";

export default class SceneBuilder {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  sprites: Array<THREE.Sprite>;
  tiles: Array<ThreeTile>;
  constructor() {
    this.scene = new THREE.Scene();
    this.tiles = [];
    this.sprites = []
  }
  build() {
    return this.scene;
  }
  render(){
  }
}
