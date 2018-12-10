import * as React from 'react';
// encapsulate a BabylonJS Scene and its camera / lightning
import { Scene, registerHandler, removeHandler } from 'react-babylonjs';
import {
  Scene as BabylonScene,
  ShaderMaterial,
  Vector3,
  Mesh,
  Camera,
  TargetCamera,
  ArcRotateCamera,
  HemisphericLight,
  DirectionalLight,
} from 'babylonjs';

interface StageProps {
  cubeRotation?: Vector3;
  actors?: Array<any>;
  width: number;
  height: number;
  options?: any;
}

export class Stage extends React.Component<StageProps, any> {
  cameraProperties: { position: Vector3 };
  cubeRotation: Vector3;
  actors: Array<any>;
  actionHandler: any;
  scene: BabylonScene;
  constructor(props, context) {
    super(props, context);
    // methods used by Scene (more will be added soon and documentation)
    this.handleSceneMount = this.handleSceneMount.bind(this);
    this.handleMeshPicked = this.handleMeshPicked.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraProperties = {
      position: new Vector3(0, 0, 5),
    };
  }
  handleMeshPicked(mesh, scene) {
    // This will be called when a mesh is picked in the canvas
  }

  handleSceneMount(event) {
    const { canvas, scene, engine } = event;
    this.scene = this.initScene(scene, canvas);
    // Scene to build your environment, Canvas you need to attach your camera.
    var camera = new ArcRotateCamera('Camera', 0, 1.05, 280, Vector3.Zero(), scene);
    camera.attachControl(canvas);

    // if you want to use a shader, pass in the directory to the component.
    var shader = new ShaderMaterial('gradient', scene, 'gradient', {});

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  }
  initScene(scene: BabylonScene, canvas: HTMLCanvasElement): BabylonScene {
    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = Mesh.CreateGround('ground1', 6, 6, 2, scene);

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);
    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // This creates and positions a free camera (non-mesh)
    var camera = new TargetCamera('camera1', new Vector3(5, 5, -5), scene);
    camera.mode = Camera.ORTHOGRAPHIC_CAMERA;
    camera.orthoTop = 5;
    camera.orthoBottom = -5;
    camera.orthoLeft = -5;
    camera.orthoRight = 5;

    // This targets the camera to scene origin
    camera.setTarget(sphere.position);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    return scene;
  }
  handleBlur() {}

  handleFocus() {}

  componentDidMount() {
    // you can add listeners to redux actions - they are intercepted by the middleware
    let handlers = {
      ['YOUR_ACTION_TYPE']: action => {
        // run any code here - ie: set state that you monitor in your scene.registerBeforeRender(()=> { ... })
        // change properties or animate meshes.
        return true;
      },
      ['YOUR_ACTION_TYPE2']: action => {
        return true; // indicates to middleware that it was handled
      },
    };

    this.actionHandler = action => {
      let handler = handlers[action.type];
      if (handler == undefined) {
        console.log(`no handler defined in babylonJS scene for ${action.type}`);
      } else {
        return handler(action);
      }
    };

    registerHandler(this.actionHandler);
  }

  componentWillUnmount() {
    delete this.scene;
    removeHandler(this.actionHandler);
  }

  render() {
    const { options, width, height } = this.props;

    return (
      <div>
        <Scene
          onSceneMount={this.handleSceneMount}
          onMeshPicked={this.handleMeshPicked}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          shadersRepository={'/shaders/'}
          visible={options.show3D}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default Stage;
