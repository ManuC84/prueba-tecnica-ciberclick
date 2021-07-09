const multiples = () => {
  for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0) output = "cyber";
    if (n % 5 == 0) output += "click";
    console.log(output || n);
  }
};

multiples();
