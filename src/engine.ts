let canvas;

const execSync = require('child_process').execSync;

const projectName = process.argv.slice(3); 
console.log("running:", projectName);

// execSync('npm run ' + arg, {stdio:[0, 1, 2]});
// execSync('npm run format', {stdio:[0, 1, 2]});