# Azimut Game Design Document

## Principles / Base ideas

- Party of characters, turn based, isometric / 3D mixed with sprites.
- Worlds are limited, and created by each player, connected by synchronized replicated databases.
- You can join existing worlds, this will expand it. (Each time a player joins a world, loot and enemies are added, new dungeons are digged)
- Game allows you a number of points per turn, you have 12 hours to compute a turn.
- You have a party of one to four heroes, in a world shared between players.
- A world has biomes and is represented by a simple 512x512x512 cube.

## Inspiration

### Gameplay

- Klei's [Invisible inc](https://www.klei.com/games/invisible-inc)
- [Overland](https://overland-game.com/)

### Art style

- Another world style : flat shapes, simple SVG shapes as much as possible
- Flat shapes, pastel colors, 

### Story

- Zombie movies, sci-fi light humor
- Stranger things, cyberpunk elements

## Gameplay loop

1. Explore, move your party around in the overworld.
2. Open dungeon (inside of buildings, underground mines, caves or find key or boss item)
3. Stealth or fight.

## Level generation

Generates a city-like area with biomes :

* a downtown / huge buildings area
* residential / commercial area
* countryside
* mountain
* seashore
* swamp
* desert

Then each biomes have levels like :

* bubbles (caves, mine)
* dungeon
* building (levels on top of each other)

