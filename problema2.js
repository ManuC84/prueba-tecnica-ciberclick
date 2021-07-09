import formattedInputs from "./formattedInputs.js";

let inputToObj = [];

//Convertir en objetos a cada input para poder trabajar con ellos más fácilmente
formattedInputs.forEach((input) => {
  let obj = {};

  let splitStr = input.split(" ");
  const startNum = splitStr[0].split("-")[0];
  const endNum = splitStr[0].split("-")[1];
  const letter = splitStr[1].charAt(0);
  const password = splitStr[2];

  Object.assign(obj, { startNum, endNum, letter, password });
  inputToObj.push(obj);
});

//Función para obtener resultado de primera parte
const resultadoPrimeraParte = () => {
  let validPasswords = 0;

  inputToObj.forEach(({ startNum, endNum, letter, password }) => {
    const rgxp = new RegExp(letter, "g");

    const letterMatches = password.split(new RegExp(letter, "gi")).length - 1;

    if (letterMatches >= startNum && letterMatches <= endNum) validPasswords++;
  });

  console.log(
    `Ejercicio 2- Primera parte: La cantidad de contraseñas validas en el input son: ${validPasswords}`
  );
};

//Función para obtener resultado de segunda parte
const resultadoSegundaParte = () => {
  let validPasswords = 0;

  function myXOR(a, b) {
    return (a || b) && !(a && b);
  }
  inputToObj.forEach(({ startNum, endNum, letter, password }) => {
    const checkStart = password[startNum - 1] == letter;
    const checkEnd = password[endNum - 1] == letter;
    if (myXOR(checkStart, checkEnd)) validPasswords++;
  });

  console.log(
    `Ejercicio 2- Segunda parte: La cantidad de contraseñas validas en el input son: ${validPasswords}`
  );
};

resultadoPrimeraParte();
resultadoSegundaParte();
