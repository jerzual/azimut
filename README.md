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
- inferno for the ui / 
- rot.js for level generation / rogue-like aspects.
- tone.js for music / sound
- node.js / express / mongodb for server-side storage.

## inspiration

### Gameplay

- klei's

### Art style

- Another world style
- flat shapes, pastel colors


### Story

- Zombie movies
- Stranger things

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

