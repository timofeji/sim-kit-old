export class Renderer implements ISystem {
  update(world: World) {
    console.log("RENDERING:");
    return world;
  }
}
