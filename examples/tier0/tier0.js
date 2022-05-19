"use strict";


// //Initialize world & render targets
let world = new Engine.World();
let scene1 = new Engine.RenderTarget('model1');
let scene2 = new Engine.RenderTarget('model2');
let renderer = new Engine.Renderer();
let input = new Engine.Input();
world.systems.push(renderer);

let box = new Engine.Box3D;

let entity = new Engine.Entity();
entity.components.push(new Engine.MeshComponent(scene1, box));
world.entities.push(entity);

entity.components.push(new Engine.MeshComponent(scene2, box));
world.entities.push(entity);

Engine.initEngine(world);

window.onload = () => {document.body.appendChild(scene1.canvas)};
