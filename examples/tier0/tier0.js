"use strict";

window.onload = () => {
  let canvas = document.getElementById("sim-kit-canvas");
  if (!canvas) {
    return;
  }

  // //Initialize world
  let world = new Engine.World();
  let renderer = new Engine.Renderer();
  world.systems.push(renderer);

  let entity = new Engine.Entity();
  entity.components.push(new Engine.MeshComponent());
  world.entities.push(entity);

  Engine.initEngine(world, canvas);
};
