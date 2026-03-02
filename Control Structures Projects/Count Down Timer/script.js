const startCountDown = () => {
    const timeInput = document.getElementById('timeInput').value;
    const timeDisplay = document.getElementById('timer');
    const timeLeft = parseInt(timeInput);
    if(isNaN(timeLeft) || timeLeft < 0) {
        timeDisplay.textContent = "Please enter a valid positive number.";
    }
    timeDisplay.textContent = `Time left: ${timeLeft} seconds`;
    for(let i = timeLeft; i >= 0; i--){
        (function(count){
            setTimeout(()=>{
                if(count > 0) {
                    timeDisplay.textContent = `Time left: ${count} seconds`;
                 }else{
                timeDisplay.textContent = "Time's up!";
            }
        }, (timeLeft-count) * 1000 )
        })(i)
    }
};
document.getElementById("startButton").addEventListener("click", startCountDown);