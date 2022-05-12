import { vec3 } from "../math";
import { IMaterial } from "./IMaterial";

import matrix4 from "../math/matrix4";


export interface IMesh{
    m_VERTICES: Float32Array;
    m_NORMALS: Array<number>;
    m_INDICES: Array<number>;
    m_TEXCOORDS: Array<number>;
    v_position: vec3;
    m_modelMatrix: matrix4;

    IBO: WebGLBuffer; // Index Buffer
    VBO: WebGLBuffer; // Vertex Buffer
    NBO: WebGLBuffer; // Normal Buffer
    TBO: WebGLBuffer; // Texture Buffer

    texAttribLocation: number;
    posAttribLocation: number;

    material: IMaterial
}