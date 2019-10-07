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

it is a total rework of old code, based on couchdb sync + docker dev env

## Principle

team based, turn based, isometric / 3D mixed with sprites.

worlds are created by each players, connected by synchronized replicated dbs.
game allows you a number of points per turn, you have 12 hours to compute a turn.
you have a party of one to 4 heroes, in a world shared between players.
world has biomes and sould be a graph of

| worlds
| / -> view
| 000/ -> 

| /worlds/000/ -> 

## tech stack

javascript(typescript) and web stuff

- babylonjs for the 3D / game engine 
- angular/ngrx/custom svgs for the ui / 
- rot.js for level generation / rogue-like aspects.
- tone.js for music / sound
- nest.js / express / couchdb / pouchdb for server-side storage.

## how to run

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

