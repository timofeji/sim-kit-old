export class vector3 {
    X: number;
    Y: number;
    Z: number;
    constructor(x: any, y: any, z: any) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }

    identity() {
        this.X = 0;
        this.Y = 0;
        this.Z = 0;
    }

    add(x: vector3) {
        this.X += x.X;
        this.Y += x.Y;
        this.Z += x.Z;
    }
    sub(x: vector3){
        this.X -= x.X;
        this.Y -= x.Y;
        this.Z -= x.Z
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

