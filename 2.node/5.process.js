//cwd current working directory
// __dirname
console.log(process.cwd()); //在哪里执行(可变)
console.log(__dirname);
//chdir  change directory
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);


