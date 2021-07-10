const fs = require("fs");

let stringInput = [];

//Separamos el input provisto de acuerdo a cada nueva linea
const array = fs.readFileSync("input.txt").toString().split(/\r?\n/);

//Creamos un array que contenga cada linea del input por separado
for (i in array) {
  stringInput.push(array[i]);
}
//Escribimos un nuevo archivo con los datos formateados como strings
require("fs").writeFile(
  "formattedInput.txt",

  JSON.stringify(stringInput),

  function (err) {
    if (err) {
      console.error("Something went wrong");
    }
  }
);
