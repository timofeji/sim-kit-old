import { World, ISystem, IEntityComponent } from "../engine";
import matrix4 from "../math/matrix4";

export class MeshComponent implements IEntityComponent {
  VBO: WebGLBuffer;
  TBO: WebGLBuffer;
  NBO: WebGLBuffer;
  IBO: WebGLBuffer;
  m_VERTICES: matrix4;
  m_TEXCOORDS: matrix4;
  m_NORMALS: matrix4;
  m_INDICES: matrix4;

  constructor() {
    //VERTEX BUFFER OBJECT
    this.VBO = _gl.createBuffer();
    _gl.bindBuffer(_gl.ARRAY_BUFFER, this.VBO);
    _gl.bufferData(_gl.ARRAY_BUFFER, new Float32Array(this.m_VERTICES), _gl.STATIC_DRAW);

    //TEXTURE BUFFER OBJECT
    this.TBO = _gl.createBuffer();
    _gl.bindBuffer(_gl.ARRAY_BUFFER, this.TBO);
    _gl.bufferData(_gl.ARRAY_BUFFER, new Float32Array(this.m_TEXCOORDS), _gl.STATIC_DRAW);

    //NORMAL BUFFER OBJECT
    this.NBO = _gl.createBuffer();
    _gl.bindBuffer(_gl.ARRAY_BUFFER, this.NBO);
    _gl.bufferData(_gl.ARRAY_BUFFER, new Float32Array(this.m_NORMALS), _gl.STATIC_DRAW);

    //INDEX BUFFER OBJECT
    this.IBO = _gl.createBuffer();
    _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, this.IBO);
    _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.m_INDICES), _gl.STATIC_DRAW);
  }
  update(world: World, deltaTime: number) {
    //Anim?
    return world;
  }
}

let canvas;
export class Renderer implements ISystem {
  constructor() {
    let fragShader = fetch("../shaders/frag.glsl");
    let vertShader = fetch("../shaders/vert.glsl");

    console.log(vertShader);

    _gl.clearColor(0.1, 0.07, 0.07, 1);
    _gl.clear(_gl.COLOR_BUFFER_BIT | _gl.DEPTH_BUFFER_BIT);
    _gl.enable(_gl.DEPTH_TEST);
    _gl.enable(_gl.CULL_FACE);
    _gl.frontFace(_gl.CCW);
    _gl.cullFace(_gl.BACK);
  }

  update(world: World, deltaTime: number) {
    world.entities.forEach((e) => {
      e.components.forEach((c) => {
        if(c === typeof MeshComponent)
        {
          // c.TBO
        }
      });
    });
    return world;
  }
}

let buildShader = (src: string, type: number) => {
  let shader = _gl.createShader(type);
  _gl.shaderSource(shader, src);
  _gl.compileShader(shader);
  if (!_gl.getShaderParameter(shader, _gl.COMPILE_STATUS)) {
    alert("Error compiling shader: " + _gl.getShaderInfoLog(shader));
    return;
  }
  return shader;
};
