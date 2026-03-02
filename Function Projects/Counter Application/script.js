let count =0;
const counterEl = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", function() {
    count++;
    counterEl.textContent = count;
});
document.getElementById("decrement").addEventListener("click", function() {
    count--;
    counterEl.textContent = count;
});
document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    counterEl.textContent = count;
});
document.getElementById("incrementBy10").addEventListener("click", function() {
    count += 10;
    counterEl.textContent = count;
});