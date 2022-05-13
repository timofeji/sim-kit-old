const { isPropertyAccessChain } = require('typescript');

const execSync = require('child_process').execSync;

const arg = process.argv.slice(3); 
console.log("running:", arg);
execSync('node ./examples/' + arg +'/' + arg, {stdio:[0, 1, 2]});


// if(process.platform === darwin)
// {
//     childProc.exec('open -a "Google Chrome" http://\__filename\', callback);
// }


let childProc = require('child_process');
childProc.exec('start https://localhost:9000');