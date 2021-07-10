const multiples = () => {
  for (var n = 1; n <= 100; n++) {
    var output = "";
    //Si es un multiplo de 3 pasar "cyber" a output, si también es un multiplo de 5 concatenar "click" a output
    if (n % 3 == 0) output = "cyber";
    if (n % 5 == 0) output += "click";
    //Si output existe mostrar en consola, en caso contrario mostrar número
    console.log(output || n);
  }
};

multiples();
