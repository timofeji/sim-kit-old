// let tests = [];
let descriptions = [];
let tests = [];

export const describe = (name: any, fn: any) => {
  descriptions.push({ name, fn });
};

export const test = (name: any, fn: any) => {
  tests.push({ name, fn });
};

let run = () => {
  descriptions.forEach((d, i) => {
    try {
      d.fn();
      console.log("\x1b[90m\x1b[47mRunning %s\x1b[0m", d.name);

	  tests.reverse();
      while (tests.length > 0) {
        let test = tests.pop();
        try {
          test.fn();
          console.log("---\x1b[30m\x1b[42m✅%s\x1b[0m", test.name);
        } catch (e) {
          console.log("---\x1b[30m\x1b[41m❌%s\x1b[0m", test.name);
          console.log("---\x1b[30m\x1b[41m%s\x1b[0m", e.stack);
        }
      }
    } catch (e) {
      console.log("\x1b[30m\x1b[41m❌%s():\x1b[0m", d.name);
      console.log(e.stack);
    }
  });
}

import assert from "assert";
import * as fs from "fs";
import * as path from "path";
let dirCont = fs.readdirSync(__dirname);
let files = dirCont.filter((elm) => {
  return elm.match(/.*\.(test?)\.(js?)$/gi);
});



files.forEach((file) => {
	let fileName = `${__dirname}/${file}`;
	if(fileName == __filename)
	{
		return;
	}
    require(fileName);
});

describe("T0", () => {
  test("engine works", () => {
    assert.equal(2+2 , 4);//-1 thats 3 quick maths
    assert.equal(tests.length , 0);
  });
});

run();
