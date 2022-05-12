"use strict";
exports.__esModule = true;
exports.VMath = exports.vec3 = void 0;
var vec3 = /** @class */ (function () {
    function vec3(x, y, z) {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }
    vec3.prototype.identity = function () {
        this.X = 0;
        this.Y = 0;
        this.Z = 0;
    };
    vec3.prototype.add = function (x) {
        this.X += x.X;
        this.Y += x.Y;
        this.Z += x.Z;
    };
    vec3.prototype.sub = function (x) {
        this.X -= x.X;
        this.Y -= x.Y;
        this.Z -= x.Z;
    };
    vec3.prototype.divideScalar = function (s) {
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
    };
    vec3.prototype.length = function () {
        return Math.sqrt(this.lengthSq());
    };
    vec3.prototype.lengthSq = function () {
        return this.X * this.X + this.Y * this.Y + this.Z * this.Z;
    };
    vec3.prototype.normalize = function () {
        return this.divideScalar(this.length());
    };
    return vec3;
}());
exports.vec3 = vec3;
var VMath;
(function (VMath) {
    function dot(a, b) { }
    VMath.dot = dot;
    function add(a, b) {
        var ret = new vec3(0, 0, 0);
        ret.X = a.X + b.X;
        ret.Y = a.Y + b.Y;
        ret.Z = a.Z + b.Z;
        return ret;
    }
    VMath.add = add;
    function sub(a, b) {
        var ret = new vec3(0, 0, 0);
        ret.X = a.X - b.X;
        ret.Y = a.Y - b.Y;
        ret.Z = a.Z - b.Z;
        return ret;
    }
    VMath.sub = sub;
    function cross(a, b) {
        var ret = new vec3(0, 0, 0);
        ret.X = a.Y * b.Z - a.Z * b.Y;
        ret.Y = a.Z * b.X - a.X * b.Z;
        ret.Z = a.X * b.Y - a.Y * b.X;
        return ret;
    }
    VMath.cross = cross;
})(VMath = exports.VMath || (exports.VMath = {}));
