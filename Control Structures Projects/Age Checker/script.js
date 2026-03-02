document.getElementById("checkButton").addEventListener("click", function () {

    const ageValue = parseInt(document.getElementById("ageInput").value);
    const resultDiv = document.getElementById("result");

    // Clear previous result
    resultDiv.innerHTML = "";

    // Validate input
    if (isNaN(ageValue)) {
        resultDiv.innerHTML = "Please enter a valid age.";
    } 
    else if (ageValue >= 18) {
        resultDiv.innerHTML = "You are eligible to vote.";
    } 
    else {
        resultDiv.innerHTML = "You are not eligible to vote.";
    }

});