let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let minCounter = 0;
let secCounter = 0;
let hourCounter = 0;

const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const reset = document.querySelector("#Reset");

let setId;

start.addEventListener("click", () => {
    // Disable start button, enable pause and reset
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;

    // Clear any existing interval before starting a new one
    clearInterval(setId);

    setId = setInterval(function () {
        secCounter++;

        // Display seconds with leading zero if less than 10
        sec.innerHTML = secCounter < 10 ? `0${secCounter}` : secCounter;

        // When seconds reach 60, increment minutes and reset seconds
        if (secCounter > 59) {
            minCounter++;
            secCounter = 0;
            sec.innerHTML = "00";

            // Display minutes with leading zero if less than 10
            minutes.innerHTML = minCounter < 10 ? `0${minCounter}` : minCounter;
        }

        // When minutes reach 60, increment hours and reset minutes
        if (minCounter > 59) {
            hourCounter++;
            minCounter = 0;
            minutes.innerHTML = "00";

            // Display hours with leading zero if less than 10
            hours.innerHTML = hourCounter < 10 ? `0${hourCounter}` : hourCounter;
        }
    }, 1000);
});

pause.addEventListener("click", () => {
    // Enable start and reset buttons, disable pause
    start.disabled = false;
    reset.disabled = false;
    pause.disabled = true;
    clearInterval(setId);
});

reset.addEventListener("click", () => {
    // Enable start button, disable pause
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;

    // Reset all counters
    minCounter = 0;
    secCounter = 0;
    hourCounter = 0;

    // Reset display
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    sec.innerHTML = "00";

    // Clear the interval if the timer was running
    clearInterval(setId);
});
