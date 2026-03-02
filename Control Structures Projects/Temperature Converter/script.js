document.getElementById("convertButton").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("tempInput").value);
    const conversionType = document.getElementById("conversionType").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let result;
    if (conversionType === "toFahrenheit") {
        result = (temperature * 9/5) + 32;
        resultDiv.innerHTML = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else if (conversionType === "toCelsius") {
        result = (temperature - 32) * 5/9;
        resultDiv.innerHTML = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
});