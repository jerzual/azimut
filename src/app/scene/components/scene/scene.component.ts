import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  @ViewChild('renderZone', { static: true })
  public renderZone: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() {
    console.log("Scene");
  }
}
