var fixed = 50;
var p, s;
var seats;

function reserve() {
    seats = document.getElementById('remain');
    var people = document.getElementById('people');
    var time = document.getElementById('time');
    var code = document.getElementById('code');
    p = parseInt(people.value);
    tm = parseInt(time.value);
    var c = Math.floor(Math.random() * (99999 - 10000) + 10000);
    fixed -= p;
    code.textContent = c;
    console.log(fixed);
    seats.textContent = fixed;
    updateContentInterval();
    intervalId = document.getElementById("time");
    intervalId.textContent = tm;
}

function updateContentInterval() {
    intervalId = document.getElementById("time");
    intervalId.textContent = --tm;
    if (tm == 0) {
        fixed += p;
        console.log(fixed);
        seats.textContent = fixed;
    }
    setTimeout(updateContentInterval, 1000);

}