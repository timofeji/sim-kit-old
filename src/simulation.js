"use strict";
exports.__esModule = true;
exports.simulate = void 0;
var gl_matrix_1 = require("gl-matrix");
var math_1 = require("./math");
var renderer_1 = require("./renderer");
var CAM_SPEED = 200;
var keys = {};
var bMouseDown;
var onKeyUp = function (event) {
    keys[event.key] = false;
};
var onKeyDown = function (event) {
    keys[event.key] = true;
};
var onMouseUp = function (event) {
    bMouseDown = false;
};
var onMouseDown = function (event) {
    bMouseDown = true;
};
document.addEventListener("keyup", onKeyUp, false);
document.addEventListener("keydown", onKeyDown, false);
document.addEventListener("mousedown", onMouseUp, false);
document.addEventListener("mouseup", onMouseDown, false);
// Update view in simulation since mat transforms are expensive 
var updateView = function (world) {
    world.camera.v_position.X = Math.cos(world.camera.pitch) * world.camera.dist;
    world.camera.v_position.Y = Math.cos(world.camera.yaw) * world.camera.dist;
    world.camera.v_position.Z = Math.sin(world.camera.pitch) * world.camera.dist;
    gl_matrix_1.mat4.lookAt(renderer_1.viewMatrix, [
        world.camera.v_position.X,
        world.camera.v_position.Y,
        world.camera.v_position.Z,
    ], [
        world.camera.v_lookAt.X,
        world.camera.v_lookAt.Y,
        world.camera.v_lookAt.Z,
    ], [0, 1, 0]); // Y UP
    // mat4.rotateZ(viewMatrix, viewMatrix, world.camera.yaw);
    // mat4.rotateY(viewMatrix, viewMatrix, world.camera.pitch);
};
function simulate(game, deltaTime) {
    // game.world.camera.v_position.Y = Math.sin(performance.now()*0.001)*5 +5;
    var cam = game.world.camera;
    var v_dir = math_1.VMath.sub(cam.v_lookAt, cam.v_position).normalize();
    var camRight = math_1.VMath.cross(v_dir, new math_1.vec3(0, 1, 0)).normalize();
    var camUp = math_1.VMath.cross(v_dir, camRight);
    if (keys["a"]) {
        // game.world.camera.v_position.sub(camRight);
        game.world.camera.pitch += 3 * deltaTime;
        updateView(game.world);
    }
    if (keys["d"]) {
        // game.world.camera.v_position.add(camRight);
        game.world.camera.pitch -= 3 * deltaTime;
        updateView(game.world);
    }
    if (keys["w"]) {
        // game.world.camera.yaw -= 2 * deltaTime;
        game.world.camera.yaw = Math.min(Math.max(game.world.camera.yaw - 2 * deltaTime, -90 * Math.PI / 180), 0);
        // game.world.camera.v_position.sub(camUp);
        updateView(game.world);
    }
    if (keys["s"]) {
        // game.world.camera.yaw += 2 * deltaTime;
        game.world.camera.yaw = Math.min(Math.max(game.world.camera.yaw + 2 * deltaTime, -90 * Math.PI / 180), 0);
        // game.world.camera.yaw = Math.min(Math.max(game.world.camera.yaw - 2 * deltaTime, 180),-90);
        // game.world.camera.v_position.add(camUp);
        updateView(game.world);
    }
    if (game.world.objects.length > 1) {
        game.world.objects[0].v_position = new math_1.vec3(-1 - Math.sin(performance.now() / 1000), 0, 0);
    }
    if (bMouseDown) {
    }
    // let renderObject = game.world.objects[0];
    // for (let index = 0; index < game.world.objects.length; index++) {
    //     const element = game.world.objects[index];
    // }
}
exports.simulate = simulate;
