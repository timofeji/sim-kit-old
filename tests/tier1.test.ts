import assert from "assert";
import { test, describe } from "./tier0.test";

import {vector3} from "../src/math/vector3";
//Basic math operation tests

describe("T1: Math", () => {
  test("Vector Arithmetic", () => {
    let v1 = vector3.identity();
    let v2 = new vector3(3,5,3);
    v1.add(v2);
    assert.equal(v1.equals(new vector3(3,5,3)), true);
  });
});
