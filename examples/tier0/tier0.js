"use strict";

// let Systems = window.Systems;

// let Engine = sim-kit;

// //Initialize world
let world = new Engine.World();

let renderer = new Engine.Renderer();
world.systems.push(renderer);

let entity = new Engine.Entity();
entity.components.push(new Engine.MeshComponent());
world.entities.push(renderer);


Engine.initEngine(world);