import { vector3 } from "./vector3";

export namespace VMath {
    export function dot(a: vector3, b: vector3) {}

    export function add(a:vector3, b:vector3){
        let ret = new vector3(0, 0, 0);
        ret.X = a.X + b.X;
        ret.Y = a.Y + b.Y;
        ret.Z = a.Z + b.Z;
        return ret;
    }


    export function sub(a:vector3, b:vector3){
        let ret = new vector3(0, 0, 0);
        ret.X = a.X - b.X;
        ret.Y = a.Y - b.Y;
        ret.Z = a.Z - b.Z;
        return ret;
    }


    export function cross(a: vector3, b: vector3) {
        let ret = new vector3(0, 0, 0);
        ret.X = a.Y * b.Z - a.Z * b.Y;
        ret.Y = a.Z * b.X - a.X * b.Z;
        ret.Z = a.X * b.Y - a.Y * b.X;

        return ret;
    }

}