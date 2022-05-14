export interface IEntity {
  components: Array<any>;
  simulate: () => void;
}
export interface ISystem {
  update: (world: World) => World;
}

export class World {
  entities: Array<IEntity>;
  systems: Array<ISystem>;

  addSystem: (system: ISystem) => {};
}

export const initEngine = (world: World) => {
  let canvas;

  window.onload = () => {
    let currentTime = 0;
    let lastTime = 0;
    let deltaTime = 0;

    canvas = document.getElementById("sim-kit-canvas");

    let gl = canvas.WebGLRenderingContext();
    if (!gl) {
      console.log("Failed to get the rendering context for WebGL");
      return;
    }

    //main loop ~ executes each frame
    let main = () => {
      //Get current delta
      currentTime = performance.now();
      deltaTime = (currentTime - lastTime) / 1000.0;
      console.log(deltaTime);
      lastTime = currentTime;
      requestAnimationFrame(main);
    };

    requestAnimationFrame(main);
  };

  window.addEventListener("resize", (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //   resizeViewport(game.gl, window.innerWidth, window.innerHeight);
  });
};
export class Renderer implements ISystem {
  update(world: World) {
    console.log("RENDERING:");
    return world;
  }
}

export const addSystem = (world: World, system: ISystem) => {
  world.systems.push(system);
};
