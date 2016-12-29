// constructs a THREE.js scene from world objects.
import * as THREE from "three";

export default class SceneBuilder {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  constructor() {
    this.scene = new THREE.Scene();
  }
  build() {
    return this.scene;
  }
}
