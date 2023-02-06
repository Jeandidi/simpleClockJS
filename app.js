const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const am_pm = document.querySelector('.session');


function adjustClock () {
    // let hh, mm, ss;
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    
    if (hh >= 12) {
        session = "PM"
    }

    if (hh > 12) {
        hh -= 12;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;


    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    am_pm.innerHTML = session;
}


window.addEventListener('load', function() {
    setInterval(adjustClock, 1000);
});


adjustClock();  