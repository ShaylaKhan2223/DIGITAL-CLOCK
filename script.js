function clock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("period");

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = hr >= 12 ? "PM" : "AM";

    if (hr > 12) {
        hr = hr - 12;

    }
    hr = (hr<10) ? "0" + hr:hr;
    min = (min<10) ? "0" + min:min;
    sec = (sec<10) ? "0" + sec:sec;
   

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    period.innerHTML = ampm;


};
clock()
setInterval(clock, 1000);