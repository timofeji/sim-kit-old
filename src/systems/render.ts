import { World, ISystem, IEntityComponent } from "../engine";
import matrix4 from "../math/matrix4";

    // window.addEventListener("resize", (event) => {

    //   if (canvas === undefined) {
    //     return;
    //   }
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   //   resizeViewport(game.gl, window.innerWidth, window.innerHeight);
    // });

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
    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.m_VERTICES), gl.STATIC_DRAW);

    //TEXTURE BUFFER OBJECT
    this.TBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.TBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.m_TEXCOORDS), gl.STATIC_DRAW);

    //NORMAL BUFFER OBJECT
    this.NBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.NBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.m_NORMALS), gl.STATIC_DRAW);

    //INDEX BUFFER OBJECT
    this.IBO = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.m_INDICES), gl.STATIC_DRAW);
  }
  update(world: World, deltaTime: number) {
    //Anim?
    return world;
  }
}

//Canvas wrapper for rendering output
export class RenderTarget{
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;

  constructor(name: string = "sim-kit-rt"){
    let canvas = document.createElement('canvas');
    let gl = canvas.getContext('webgl');
    
    gl.clearColor(0.1, 0.07, 0.07, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);
  }
}

export class Renderer implements ISystem {

    initRT(): {
      gl.useProgram(glProgram);

      matWorldUniformLocation = gl.getUniformLocation(glProgram, "u_mWorld");
      matViewUniformLocation = gl.getUniformLocation(glProgram, "u_mView");
      matModelUniformLocation = gl.getUniformLocation(glProgram, "u_mModel");
      matProjUniformLocation = gl.getUniformLocation(glProgram, "u_mProj");
      lightUniformLocation = gl.getUniformLocation(glProgram, "u_vLightPos");
      viewPosUniformLocation = gl.getUniformLocation(glProgram, "u_vViewPos");
      timeUniformLocation = gl.getUniformLocation(glProgram, "fTime");
      shininessUniformLocation = gl.getUniformLocation(glProgram, "u_shininess");



      mat4.identity(worldMatrix);
      mat4.identity(modelMatrix);
      mat4.lookAt(viewMatrix, [0, 0, 6], [0, 0, 0], [0, 1, 0]);
      mat4.perspective(projMatrix, glMatrix.toRadian(90), gl.canvas.width/gl.canvas.height, 0.1, 1000.0);

      gl.viewport(0, 0, window.innerWidth, window.innerHeight);

      gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);
      gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);
      gl.uniformMatrix4fv(matModelUniformLocation, false, modelMatrix);
      gl.uniformMatrix4fv(matViewUniformLocation, false, viewMatrix);
    }

  // initRT(rt: RenderTarget) {
  //   let fragShader = fetch("../shaders/frag.glsl");
  //   let vertShader = fetch("../shaders/vert.glsl");

  //   console.log(vertShader);

  //  // Compile shaders
  //   let vertexShader = buildShader(gl, vertShader, gl.VERTEX_SHADER);
  //   let fragmentShader = buildShader(gl, fragShader, gl.FRAGMENT_SHADER);

  //   // Create program
  //   glProgram = gl.createProgram();

  //   // Attach and link shaders to the program
  //   gl.attachShader(glProgram, vertexShader);
  //   gl.attachShader(glProgram, fragmentShader);
  //   gl.linkProgram(glProgram);
  //   if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
  //       console.error("ERROR linking program!", gl.getProgramInfoLog(glProgram));
  //       return;
  //   }

  //   gl.validateProgram(glProgram);
  //   if (!gl.getProgramParameter(glProgram, gl.VALIDATE_STATUS)) {
  //       console.error("ERROR validating program!", gl.getProgramInfoLog(glProgram));
  //       return;
  //   }
  // }

  update(world: World, deltaTime: number) {
    world.entities.forEach((e) => {
      e.components.forEach((c) => {
        if(c === typeof MeshComponent)
        {
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
