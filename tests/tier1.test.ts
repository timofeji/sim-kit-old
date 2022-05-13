import assert from "assert";
import { test, describe } from "./tier0.test";

import {vector3} from "../src/math/vector3";
//Basic math operation tests

describe("T1: Vector Math", () => {
  test("basic arithmetic", () => {
    assert.equal(2 + 2, 4);
  });

  test("v3 + v3", () => {
    let v1 = vector3.identity();
    let v2 = new vector3(3,0,3);
    v1.add(v2);
    assert.equal(v1.equals(new vector3(3,0,3)), true);
  });
});
