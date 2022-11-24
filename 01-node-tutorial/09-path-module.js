const path = require("path");

console.log("platform specific separator : ", path.sep); // platform specific separator

const filePath = path.join("/content/", "subfolder", "test.txt"); // join sequence of path segments
console.log(" filePath : ", filePath);

const base = path.basename(filePath);
console.log("basename : ", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(" absolute path : ", absolute);
