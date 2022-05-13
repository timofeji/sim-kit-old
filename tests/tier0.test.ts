// let tests = [];
let descriptions = [];
let tests = [];

export const describe = (name: any, fn: any) => {
	descriptions.push({ name, fn })
}

export const test = (name: any, fn: any) => {
	tests.push({ name, fn })
}

function run() {
	descriptions.forEach((d, i) => {
		try {
			d.fn();
			console.log('\x1b[90m\x1b[47mRunning %s\x1b[0m', d.name);

			while(tests.length > 0)
			{
				let test = tests.pop();
				try
				{
					test.fn();
					console.log("\x1b[30m\x1b[42m✅%s():\x1b[0m", test.name);
				}
				catch(e)
				{
					console.log("\x1b[30m\x1b[41m❌%s():\x1b[0m", test.name);
				}
			}
			console.log('\x1b[90m\x1b[47mRunning %s\x1b[0m', d.name);

		} catch (e) {
			console.log("\x1b[30m\x1b[41m❌%s():\x1b[0m", d.name);
			console.log(e.stack);
		}
	})
}

import assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
let dirCont = fs.readdirSync( __dirname );
let files = dirCont.filter( ( elm ) => {return elm.match(/.*\.(test?)\.(js?)$/ig);});

describe('tier-0',()=>{
	test('test works',()=>{
		assert.equal(2+2, 4);
	} );
	test('test2 doesn\'t work',()=>{
		assert.equal(1+1, false);
	} );
});

describe('tier-0.2',()=>{
	test('test works',()=>{
		assert.equal(2+2, 4);
	} );
	test('test2 doesn\'t work',()=>{
		assert.equal(1+1, false);
	} );
});

files.forEach(file => {
	if( __dirname  + file  == __filename){
		return;
	}

	console.log(__filename);
})


run()