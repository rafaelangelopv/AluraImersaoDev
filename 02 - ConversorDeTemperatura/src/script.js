var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");
var kelvinInput = document.getElementById("kelvin");

var inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celsius":
        fahrenheitInput.value = (value * 1.8 + 32).toFixed(2);
        kelvinInput.value = (value + 273.15).toFixed(2);
        break;
      case "fahrenheit":
        celsiusInput.value = ((value - 32) / 1.8).toFixed(2);
        kelvinInput.value = ((value - 32) / 1.8 + 273.15).toFixed(2);
        break;
      case "kelvin":
        celsiusInput.value = (value - 273.15).toFixed(2);
        fahrenheitInput.value = ((value - 273.15) * 1.8 + 32).toFixed(2);
        break;
    }
  });
}
