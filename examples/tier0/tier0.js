"use strict";

// let Systems = window.Systems;

// let Engine = sim-kit;

// //Initialize world
let world = new Engine.World();
let renderer = new Engine.Renderer();
Engine.addSystem(world);


// let entity = world.createEntity();
// entity.addComponent(new MeshComponent());

world.addSystem(renderer);

//Game thread
world.update = () => {
}

//Render thread
renderer.update = () => {
}

initEngine(world);