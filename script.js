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
    //start aur reset disable honge baki dono chalenge
    start.disabled = true;
    reset.disabled = true;
    pause.disabled = false;
  setId = setInterval(function () {
    secCounter++;
    if(secCounter<10)
    {
        sec.innerHTML = `0${secCounter}`
    }
    else{
        sec.innerHTML = secCounter;
    }
    if (secCounter > 60) {
      minCounter++;
      if(minCounter<10){
        minutes.innerHTML = `0${minCounter}`
      }
      else{
        minutes.innerHTML = minCounter;
      }
      secCounter = 0;
    }
    if (minCounter > 60) {
      hourCounter++;
      if(hourCounter<10){
        hours.innerHTML = `0${hourCounter}`
      }
        else{
            hours.innerHTML = hourCounter;
        }
      minCounter = 0;
      secCounter = 0;
    }
  }, 100);
});
pause.addEventListener("click", () => {
    //pause disable hoga baki dono chalenge
    start.disabled = false;
    reset.disabled = false;
    pause.disabled = true;
  clearInterval(setId);
});
reset.addEventListener("click", () => {
    //start disable hoga aur pause enable
    start.disabled = false;
    pause.disabled = true;
    minCounter=0;
    secCounter=0;
    hourCounter=0;
 hours.innerHTML = "00";
 minutes.innerHTML = "00";
 sec.innerHTML = "00";
});