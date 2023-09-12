const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
setTimeout(() => console.log("timeout 1"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("file-read.txt", () => {
  console.log("file read");
  console.log("-----------------------------");

  setTimeout(() => console.log("timeout 2"), 0);
  setTimeout(() => console.log("timeout 3"), 3000);
  setImmediate(() => console.log("immediate 2 finished"));

  process.nextTick(() => console.log("process.nextTick  finished"));
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "pbkdf2 finished");
  });
});
console.log("hello form the top level code");
