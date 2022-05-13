"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.describe = void 0;
// let tests = [];
let descriptions = [];
let tests = [];
const describe = (name, fn) => {
    descriptions.push({ name, fn });
};
exports.describe = describe;
const test = (name, fn) => {
    tests.push({ name, fn });
};
exports.test = test;
function run() {
    descriptions.forEach((d, i) => {
        try {
            d.fn();
            console.log("\x1b[90m\x1b[47mRunning %s\x1b[0m", d.name);
            while (tests.length > 0) {
                let test = tests.pop();
                try {
                    test.fn();
                    console.log("---\x1b[30m\x1b[42m✅%s\x1b[0m", test.name);
                }
                catch (e) {
                    console.log("---\x1b[30m\x1b[41m❌%s\x1b[0m", test.name);
                    console.log("---\x1b[30m\x1b[41m%s\x1b[0m", e.stack);
                }
            }
        }
        catch (e) {
            console.log("\x1b[30m\x1b[41m❌%s():\x1b[0m", d.name);
            console.log(e.stack);
        }
    });
}
const assert_1 = __importDefault(require("assert"));
const fs = __importStar(require("fs"));
let dirCont = fs.readdirSync(__dirname);
let files = dirCont.filter((elm) => {
    return elm.match(/.*\.(test?)\.(js?)$/gi);
});
(0, exports.describe)("tier-0", () => {
    (0, exports.test)("testing works", () => {
        assert_1.default.equal(2 + 2, 4);
    });
});
files.forEach((file) => {
    let fileName = `${__dirname}\\${file}`;
    if (fileName == __filename) {
        return;
    }
    console.log(fileName);
    require(fileName);
});
run();
//# sourceMappingURL=tier0.test.js.map