# Azimut Game (working title)

<pre>
██   ▄▄▄▄▄▄   ▄█ █▀▄▀█   ▄     ▄▄▄▄▀ 
█ █ ▀   ▄▄▀   █  █ █ █    █ ▀▀▀ █    
█▄▄█ ▄▀▀   ▄▀ █  █ ▄ █ █   █    █    
█  █ ▀▀▀▀▀▀   ▐█ █   █ █   █   █     
   █           ▐    █  █▄ ▄█  ▀      
  █                ▀    ▀▀▀          
 ▀                                   
</pre>

A turn based party survival game in your browser

It is a total rework of old, still non-working, code... and a side-project, so don't expect anything.

## Tech Stack

TypeScript, the web platform.

- [THREE.js](https://threejs.org/) & [angular-three](https://angularthree.netlify.app/) for the 3D / game engine 
- [Angular](https://angular.dev/) as the main UI framework 
- [Signal store](https://ngrx.io/guide/signals/signal-store) for state management
- [RxDB](https://rxdb.info/) for data replication and local-first aspects.
- [Rot.js](https://ondras.github.io/rot.js/hp/) for level generation / rogue-like aspects.
- [Tone.js](https://tonejs.github.io/) and [Tonal](https://github.com/tonaljs/tonal) for music / sound
- [node.js](https://nodejs.org) / [fastify](https://fastify.dev) / [couchdb](https://docs.couchdb.org) for server-side storage.
- [vitest](https://vitest.dev/) / [playwright](https://playwright.dev/) for tests.

## How to run ?

### Pre-requisites

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/)
- [docker](https://hub.docker.com/)

### Installation

```bash
git clone git@github.com:jerzual/azimut.git
cd azimut
make build
make start
```

### Development

Open <http://localhost:4000>
