let testJson = require('./testjson/testjson.json');


let testarray = [];

testJson.forEach(sub => testarray.push(sub.name));

console.log('what is the amount of subs?');
console.log(testarray.length);
