# Azimut

<pre>
██   ▄▄▄▄▄▄   ▄█ █▀▄▀█   ▄     ▄▄▄▄▀ 
█ █ ▀   ▄▄▀   █  █ █ █    █ ▀▀▀ █    
█▄▄█ ▄▀▀   ▄▀ █  █ ▄ █ █   █    █    
█  █ ▀▀▀▀▀▀   ▐█ █   █ █   █   █     
   █           ▐    █  █▄ ▄█  ▀      
  █                ▀    ▀▀▀          
 ▀                                   
</pre>

a turn based party survival game

## principles :

team based, turn based, isometric / 3D mixed with sprites.

## tech stack

javascript(typescript) and web stuff

- babylonjs for the 3D / game engine 
- angular/ngrx/custom svgs for the ui / 
- rot.js for level generation / rogue-like aspects.
- tone.js for music / sound
- nest.js / express / couchdb / pouchdb for server-side storage.

## how to run

    npm ci
    npm run start

### prerequisites
have docker + docker-compose installed

## inspiration

### Gameplay

- klei's invisible inc
- dishonored series
- little big adventure

### Art style

- Another world style : flat shapes, simple SVg shapes as much as possible
- flat shapes, pastel colors

### Story

- Zombie movies
- Stranger things
- Groundhound day

## Gameplay loop

1. explore, move your party around in the overworld.
2. dungeon (inside of buildings, underground mines, caves or find key or boss item)
3. stealth or fight :

## Level generation

generates a city-like area with biomes :

* a downtown / huge buildings area
* residential / commercial area
* countryside
* mountain
* seashore
* swamp
* desert

then each biomes have levels like :

* bubbles (caves, mine)
* dungeon
* building (levels on top of each other)

## Angular cli scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

it is a total rework of old code, based on couchdb sync + docker dev env

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).