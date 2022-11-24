// synchronous
const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.       // same thing

console.log("start");
const first = readFileSync("./content/first.txt", "utf8"); // path , encoding
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
    "./content/result-sync.txt", // file path
    `Here is the result : ${first}, ${second}`, // content
    { flag: "a" } // options object .. append mode..
);
console.log("done with this task");
console.log("starting the next one");

/**
 * file system module fs -> ... they are two flavours
 * asynchronously , non blocking  or synchronously .. blocking..
 *
 * non blocking is better which is asynchronously................
 */
