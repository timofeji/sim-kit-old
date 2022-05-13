"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const tier0_test_1 = require("./tier0.test");
//Basic math operation tests
(0, tier0_test_1.test)('vector math', () => {
    (0, assert_1.default)(2 + 2 == 4, 'Shit');
});
//# sourceMappingURL=tier1.test.js.map