import { Scene, Camera, AmbientLight, Mesh } from 'react-three';
import * as THREE from 'three';
import * as React from 'react';
interface ThreeViewProps {
   // position: any;
}
export class ThreeView extends React.Component<ThreeViewProps, undefined>{
    render() {
        return (
            <Scene
                width={window.innerWidth}
                height={window.innerHeight}
                >
                <Camera
                    aspect={window.innerWidth / window.innerHeight}
                    far={1000}
                    fov={50}
                    near={1}
                    />{/*
                <AmbientLight
                    color={this.props.color}
                    intensity={this.props.intensity}
                    />
                <Mesh
                    position={this.props.position}
                    geometry={new THREE.BoxGeometry(this.props.size, this.props.size, this.props.size)}
                    material={new THREE.MeshBasicMaterial({ color: this.props.color })}
                    />*/}
            </Scene>);
    }
}