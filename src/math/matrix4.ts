export default class matrix4 extends Float32Array {

  static create(): matrix4 {
    let mat = new Float32Array(15);
    mat[0] = 1;
    mat[4] = 1;
    mat[8] = 1;
    return mat;
  }
  static identity(mat: matrix4): matrix4 {
    mat[0] = 1;
    mat[1] = 0;
    mat[2] = 0;
    mat[3] = 0;
    mat[4] = 0;
    mat[5] = 1;
    mat[6] = 0;
    mat[7] = 0;
    mat[8] = 0;
    mat[9] = 0;
    mat[10] = 1;
    mat[11] = 0;
    mat[12] = 0;
    mat[13] = 0;
    mat[14] = 0;
    mat[15] = 1;
    return mat;
  }
  static translate(m_modelMatrix: matrix4, identityMatrix: Float32Array, arg2: number[]) {
      throw new Error("Method not implemented.");
  }
  static lookAt(viewMatrix: Float32Array, arg1: number[], arg2: number[], arg3: number[]) {
    throw new Error("Method not implemented.");
  }
  static perspective(projMatrix: Float32Array, arg1: any, arg2: number, arg3: number, arg4: number) {
    throw new Error("Method not implemented.");
  }
  
}
