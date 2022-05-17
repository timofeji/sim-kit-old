export * from "./systems/render";
declare global {
  //cache gl context for rendering
  let _gl: WebGLRenderingContext;
  let _canvas: any;
}
export interface ISystem {
  update: (world: World, deltaTime: number) => World;
}
export interface IEntityComponent {}
export class Entity {
  components: Array<IEntityComponent> = [];
}
export class World {
  entities: Array<Entity> = [];
  systems: Array<ISystem> = [];

  constructor(c: any) {
    _gl = c.getContext("webgl");
    _canvas = c;

    if (!_gl) {
      console.log("Failed to get the rendering context for WebGL");
      return;
    }
  }

  GetEntitiesByComponentType(t: any) {
    return this.entities.filter((e) => {
      return e.components.filter((c) => {
        typeof c === t;
      });
    });
  }
}

export const initEngine = (world: World) => {
  let currentTime = 0;
  let lastTime = 0;
  let deltaTime = 0;

  //main loop ~ executes each frame
  let main = () => {
    //Get current delta
    currentTime = performance.now();
    deltaTime = (currentTime - lastTime) / 1000.0;

    world.systems.forEach((s) => {
      s.update(world, deltaTime);
    });

    lastTime = currentTime;
    requestAnimationFrame(main);
  };

    // window.addEventListener("resize", (event) => {
    //   if (canvas === undefined) {
    //     return;
    //   }
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   //   resizeViewport(game.gl, window.innerWidth, window.innerHeight);
    // });


  requestAnimationFrame(main);
};
