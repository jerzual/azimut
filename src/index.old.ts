//client entry point
// import Plague from './Plague';
import "./index.scss";

// new Plague();

const SQUARE_WIDTH = 16,
    SQUARE_HEIGHT = 16,
    CITY_WIDTH = 32,
    CITY_HEIGHT = 5,
    ROOM_MIN_WIDTH = 3,
    WALL_SIZE = 1;

class Tile {
    x:number;
    y:number;
    entities:Array<Object>;
    items:Array<Object>;
    isObstacle:boolean;
    isRoad:boolean;
    constructor({
        x,
        y
    }) {
        this.x = x;
        this.y = y;
        this.entities = [];
        this.items = [];
        this.isObstacle = false;
        this.isRoad = false;
    }
}
class Square {
    tiles: Array<Array<Tile>>;
    constructor() {
        this.tiles = [
            []
        ];
    }
}
class City {
    tiles: Array<Array<Tile>>;
    constructor() {
        this.tiles = [
            []
        ];
    }
    getTileAt(x:number, y:number){
        return this.tiles[x][y];
    }
}
class CityBuilder {

}
class CityRenderer {
    context:CanvasRenderingContext2D;
    city:City;
    constructor(canvas,world){
        this.context = canvas.getContext('2d');
    }
    render(){
        for(let cx=0;cx<CITY_WIDTH;cx++){
            
        for(let cy=0;cy<CITY_WIDTH;cy++){
            
        for(let sx=0;sx<SQUARE_WIDTH;sx++){
            
        for(let sy=0;sy<SQUARE_HEIGHT;sy++){
           let x = cx*SQUARE_WIDTH+sx,
               y = cy*SQUARE_HEIGHT+sy,tile = this.city.getTileAt(x,cy*SQUARE_HEIGHT+sy);
            
        }
        }
        }
        }
    }
}
class SceneBuilder {
    scene:THREE.Scene;
    camera:THREE.OrthographicCamera;
    constructor() {
        this.scene = new THREE.Scene();
    }
    createLights() {

        var ambientLight = new THREE.AmbientLight(Math.random() * 0x10);
        this.scene.add(ambientLight);

        var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        this.scene.add(directionalLight);

        var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        this.scene.add(directionalLight);
        return this;
    }
    createCamera() {
        this.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -500, 1000);
        this.camera.position.x = 200;
        this.camera.position.y = 200;
        this.camera.position.z = 200;
        return this;
    }
    createGrid() {

        // Grid

        var size = 250,
            step = 50;

        var geometry = new THREE.Geometry();

        for (var i = -size; i <= size; i += step) {

            geometry.vertices.push(new THREE.Vector3(-size, 0, i));
            geometry.vertices.push(new THREE.Vector3(size, 0, i));

            geometry.vertices.push(new THREE.Vector3(i, 0, -size));
            geometry.vertices.push(new THREE.Vector3(i, 0, size));

        }

        var material = new THREE.LineBasicMaterial({
            color: 0x7AB793,
            opacity: 0.2
        });

        var line = new THREE.LineSegments(geometry, material);
        this.scene.add(line);
        return this;
    }
    build() {
        return this.scene;
    }
}

let scene, camera, builder, world, renderer;

const resize = () => {


				camera.left = window.innerWidth / - 2;
				camera.right = window.innerWidth / 2;
				camera.top = window.innerHeight / 2;
				camera.bottom = window.innerHeight / - 2;

				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );
    },
    render = () => {

        var timer = Date.now() * 0.0001;

        //camera.position.x = Math.cos(timer) * 200;
        //camera.position.z = Math.sin(timer) * 200;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);

    },
    animate = () => {

        requestAnimationFrame(animate);

        //stats.begin();
        render();
        //stats.end();

    },
    initialize = () => {
        location.hash = 'home';
        let container = document.getElementById('plague');
        let builder = new SceneBuilder();
        builder.createLights().createCamera();
        camera = builder.camera;
        scene = builder.createGrid().build();
        //threejs
        renderer = new THREE.WebGLRenderer();
        //renderer.setClearColor( 0xf0f0f0 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        //the 3D scene is always in the background, behind .views
        if(container){
            container.appendChild( renderer.domElement );
        }
        let minimap = document.getElementById('minimap');
        new CityRenderer(minimap, {});
        window.addEventListener( 'resize', resize, false );

    };
initialize();
animate();