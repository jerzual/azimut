# Azimut

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Azimut](#azimut)
  - [principles :](#principles)
  - [tech stack](#tech-stack)
  - [how to run](#how-to-run)
    - [prerequisites](#prerequisites)
  - [inspiration](#inspiration)
    - [Gameplay](#gameplay)
    - [Art style](#art-style)
    - [Story](#story)
  - [Gameplay loop](#gameplay-loop)
  - [Level generation](#level-generation)
  - [Scaffolding](#scaffolding)
    - [Webpack nest cli](#webpack-nest-cli)
    - [Angular cli](#angular-cli)
      - [Development server](#development-server)
      - [Code scaffolding](#code-scaffolding)
      - [Build](#build)
      - [Running unit tests](#running-unit-tests)
      - [Running end-to-end tests](#running-end-to-end-tests)
      - [Further help](#further-help)

<!-- /code_chunk_output -->


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

- THREE.js for the 3D / game engine 
- angular/ngrx/custom svgs for the ui
- rot.js for level generation / rogue-like aspects.
- tone.js for music / sound
- node.js / express / couchdb / pouchdb for server-side storage.

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

- Another world style : flat shapes, simple SVG shapes as much as possible
- flat shapes, pastel colors

### Story

- Zombie movies, sci fi light humor
- Stranger things
- Groundhound day

## Gameplay loop

1. explore, move your party around in the overworld.
2. dungeon (inside of buildings, underground mines, caves or find key or boss item)
3. stealth or fight.

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

## Scaffolding

### Webpack nest cli

Run SSR server with webpack + nest universal

### Angular cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

it is a total rework of old code, based on couchdb sync + docker dev env

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/) and [Cucumber](https://cucumber.io/).

// todo use submodule e2e with docker

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).