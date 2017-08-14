import * as React from "react";
// encapsulate a BabylonJS Scene and its camera / lightning
import { Scene, registerHandler, removeHandler } from "react-babylonjs";
import { ArcRotateCamera, ShaderMaterial, Vector3 } from "babylonjs";

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
  actionHandler:any;
  scene:any;
  constructor(props, context) {
    super(props, context);
    // methods used by Scene (more will be added soon and documentation)
    this.onSceneMount = this.onSceneMount.bind(this);
    this.onTilePicked = this.onTilePicked.bind(this);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraProperties = {
      position: new Vector3(0, 0, 5)
    };
  }
  onTilePicked(mesh, scene) {
    // This will be called when a mesh is picked in the canvas
  }

  onSceneMount(e) {
    const { canvas, scene, engine } = e;

    // Scene to build your environment, Canvas you need to attach your camera.
    var camera = new ArcRotateCamera(
      "Camera",
      0,
      1.05,
      280,
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas);

    // if you want to use a shader, pass in the directory to the component.
    var shader = new ShaderMaterial("gradient", scene, "gradient", {});

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  }

  componentDidMount() {
    // you can add listeners to redux actions - they are intercepted by the middleware
    let handlers = {
      ["YOUR_ACTION_TYPE"]: action => {
        // run any code here - ie: set state that you monitor in your scene.registerBeforeRender(()=> { ... })
        // change properties or animate meshes.
        return true;
      },
      ["YOUR_ACTION_TYPE2"]: action => {
        return true; // indicates to middleware that it was handled
      }
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
    this.scene = null;
    removeHandler(this.actionHandler);
  }

  render() {
    const { options, width, height } = this.props;

    return (
      <div>
        <Scene
          onSceneMount={this.onSceneMount}
          onMeshPicked={this.onTilePicked}
          shadersRepository={"/shaders/"}
          visible={options.show3D} 
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default Stage;
