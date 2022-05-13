"use strict";

console.log("AAAAAAAAA")
window.onload = () => {
    let currentTime = 0;
    let lastTime = 0;
    let deltaTime = 0;
    let canvas = document.getElementById("canvas");

    //Instantiate game instance
    let scene = new World();
    // scene.gl = canvas.getContext("webgl");

    initRenderer(game);

    //resize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", (event) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        resizeViewport(game.gl, window.innerWidth, window.innerHeight);
    });



    //main loop ~ executes each anim frame to simulate and render game
    let main = () => {
        //Get current delta
        currentTime = performance.now();
        deltaTime = (currentTime - lastTime) / 1000.0;

        // /resize canvas
        if (!game.gl) {
            console.log("Failed to get the rendering context for WebGL");
            return;
        }

        console.log(deltaTime);

        // // Simulate
        // simulate(game, deltaTime);

        // //Render
        // render(game, deltaTime);

        lastTime = currentTime;
        requestAnimationFrame(main);
    };

    console.log("starting game yo");
    requestAnimationFrame(main);
};