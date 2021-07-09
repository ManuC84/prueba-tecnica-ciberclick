const fs = require("fs");

let stringInput = [];

const array = fs.readFileSync("input.txt").toString().split(/\r?\n/);
for (i in array) {
  stringInput.push(array[i]);
}

require("fs").writeFile(
  "formattedInput.txt",

  JSON.stringify(stringInput),

  function (err) {
    if (err) {
      console.error("Something went wrong");
    }
  }
);
