export * from "./systems/render";


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


  requestAnimationFrame(main);
};
