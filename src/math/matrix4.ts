export default class matrix4 {
  static create(): matrix4 {
    let mat = new Float32Array(15);
    mat[0] = 1;
    mat[4] = 1;
    mat[8] = 1;
    return mat;
  }
}
