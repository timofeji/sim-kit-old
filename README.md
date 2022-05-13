[![npm version](https://badge.fury.io/js/sim-kit.svg)](https://badge.fury.io/js/sim-kit)
[![Build](https://github.com/timofeji/sim-kit/actions/workflows/build.yml/badge.svg)](https://github.com/timofeji/sim-kit/actions/workflows/build.yml)
[![Test](https://github.com/timofeji/sim-kit/actions/workflows/test.yml/badge.svg)](https://github.com/timofeji/sim-kit/actions/workflows/test.yml)
# sim-kit
<!-- ![perennial](https://user-images.githubusercontent.com/11130291/168183021-e40cf3c5-4648-40f3-9d79-37c6a404aa1a.png)
 -->
<img src="https://user-images.githubusercontent.com/11130291/168183021-e40cf3c5-4648-40f3-9d79-37c6a404aa1a.png" alt="drawing" width="200"/>
Sim-kit is a small rendering/game library written in typescript for web components


## how to use
##### 1.) Install package
```
  npm install sim-kit --save
```


###### running examples
###### Avaialable examples: tier0
```
  npm run example <example-name>
```


##### Creating a Simulation
```typescript
window.onload = () => {
    let currentTime = 0;
    let lastTime = 0;
    let deltaTime = 0;
    let canvas = document.getElementById("canvas");

    //Instantiate game instance
    let game = new Game();
    game.gl = canvas.getContext("webgl");
    game.world = new World();

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


        // Simulate
        simulate(game, deltaTime);

        //Render
        render(game, deltaTime);

        lastTime = currentTime;
        requestAnimationFrame(main);
    };

    console.log("starting game yo");
    requestAnimationFrame(main);
};
```



