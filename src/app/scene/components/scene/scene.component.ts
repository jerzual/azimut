import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {Engine, Scene, FreeCamera, Light,
  Vector3, HemisphericLight, MeshBuilder
  } from 'babylonjs';
import { EngineService } from '../../services/engine.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  @ViewChild('renderZone', { static: true })
  public renderZone: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.renderZone);
    this.engServ.animate();
  }
}
