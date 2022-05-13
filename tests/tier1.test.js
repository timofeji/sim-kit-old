"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const tier0_test_1 = require("./tier0.test");
const vector3_1 = require("../src/math/vector3");
//Basic math operation tests
(0, tier0_test_1.describe)("T1: Vector Math", () => {
    (0, tier0_test_1.test)("basic arithmetic", () => {
        assert_1.default.equal(2 + 2, 4);
    });
    (0, tier0_test_1.test)("v3 + v3", () => {
        let v1 = vector3_1.vector3.identity();
        let v2 = new vector3_1.vector3(3, 0, 3);
        v1.add(v2);
        assert_1.default.equal(v1.equals(new vector3_1.vector3(3, 0, 3)), true);
    });
});
//# sourceMappingURL=tier1.test.js.map