document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("button");
    var inputTemperature = document.getElementById("input-temperature");
    var container = document.getElementById("container");
    var isClicked = false;

    convertButton.addEventListener("click", function () {
        var celsiusTemperature = inputTemperature.value.trim();

        if (celsiusTemperature.length === 0) {
            return;
        }

        if (isClicked) {
            document.querySelector(".kelvin-temperature").remove();
            document.querySelector(".fahrenheit-temperature").remove();
        }

        var kelvinTemperature = document.createElement("div");
        kelvinTemperature.classList.add("kelvin-temperature");
        kelvinTemperature.textContent = "Temperature in Kelvin: " + (+celsiusTemperature + 273.15) + " K";
        container.appendChild(kelvinTemperature);

        var fahrenheitTemperature = document.createElement("div");
        fahrenheitTemperature.classList.add("fahrenheit-temperature");
        fahrenheitTemperature.textContent = "Temperature in Fahrenheit degrees: " + (celsiusTemperature * 1.8 + 32) + " °F";
        container.appendChild(fahrenheitTemperature);

        isClicked = true;
    });
});