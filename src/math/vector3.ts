export class vector3 {
  X: number;
  Y: number;
  Z: number;
  constructor(x: any = 0, y: any = 0, z: any = 0) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }

  static identity() {
    let v = new vector3();
    v.X = 0;
    v.Y = 0;
    v.Z = 0;
    return v;
  }

  equals(v: vector3) {
    return this.X === v.X && this.Y === v.Y && this.Z === v.Z;
  }

  add(x: vector3) {
    this.X += x.X;
    this.Y += x.Y;
    this.Z += x.Z;
  }
  sub(x: vector3) {
    this.X -= x.X;
    this.Y -= x.Y;
    this.Z -= x.Z;
  }

  divideScalar(s: number) {
    if (s) {
      this.X /= s;
      this.Y /= s;
      this.Z /= s;
    } else {
      this.X = 0;
      this.Y = 0;
      this.Z = 0;
    }

    return this;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }
  lengthSq() {
    return this.X * this.X + this.Y * this.Y + this.Z * this.Z;
  }
  normalize() {
    return this.divideScalar(this.length());
  }
}
