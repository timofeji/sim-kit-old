"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vector3 = void 0;
class vector3 {
    constructor(x = 0, y = 0, z = 0) {
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
    equals(v) {
        return this.X === v.X && this.Y === v.Y && this.Z === v.Z;
    }
    add(x) {
        this.X += x.X;
        this.Y += x.Y;
        this.Z += x.Z;
    }
    sub(x) {
        this.X -= x.X;
        this.Y -= x.Y;
        this.Z -= x.Z;
    }
    divideScalar(s) {
        if (s) {
            this.X /= s;
            this.Y /= s;
            this.Z /= s;
        }
        else {
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
exports.vector3 = vector3;
//# sourceMappingURL=vector3.js.map