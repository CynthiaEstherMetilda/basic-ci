const add = require("./app");

if (add(10, 20) !== 30) {
    throw new Error("Test failed");
}

console.log("All tests passed!");