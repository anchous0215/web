function addNInput(n) {
  const form = document.getElementById("formex");
  if (n <= 0) {
    n = 1;
  }

  for (let i = 0; i < n; i++) {
    const input = document.createElement("input");
    input.type = "text";

    //модификация
    input.addEventListener("focus", function() {
      this.classList.add("red");
    });

    input.addEventListener("blur", function() {
      this.classList.remove("red");
    });

    input.addEventListener("input", function() {
      let sum = 0;
      const inputs = form.getElementsByTagName("input");

      // Проходим по всем полям ввода и суммируем их значения
      for (let i = 0; i < inputs.length; i++) {
        if (!isNaN(inputs[i].value)) {
          sum += Number(inputs[i].value);
        }
      }

      const h1 = document.getElementsByTagName("h1")[0];
      h1.textContent =  sum;
      });
    //конец модификации

    form.appendChild(input);
  }


    updateSum();
};



addNInput(5);
