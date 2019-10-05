import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  getGameKey() {
    return v4();
  }
}
