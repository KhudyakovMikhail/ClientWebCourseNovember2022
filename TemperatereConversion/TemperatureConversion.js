document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("button");
    var inputTemperature = document.getElementById("input-temperature");
    var clicked = false;

    convertButton.addEventListener("click", function () {
        var celsiusTemperature = inputTemperature.value.trim();

        if (celsiusTemperature.length === 0) {
            return;
        }

        if (clicked === true) {
            document.querySelector(".kelvin-temperature").remove();
            document.querySelector(".fahrenheit-temperature").remove();
        }

        var kelvinTemperature = document.createElement("div");
        kelvinTemperature.classList.add("kelvin-temperature");
        kelvinTemperature.textContent = "Temperature in Kelvin degrees:" + (celsiusTemperature * 1 + 273.15) + "°K";
        document.body.appendChild(kelvinTemperature);

        var fahrenheitTemperature = document.createElement("div");
        fahrenheitTemperature.classList.add("fahrenheit-temperature");
        fahrenheitTemperature.textContent = "Temperature in Fahrenheit degrees:" + (celsiusTemperature * 1.8 + 32) + "°F";
        document.body.appendChild(fahrenheitTemperature);

        clicked = true;
    });
});