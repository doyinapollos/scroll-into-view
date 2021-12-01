let clock = document.querySelector("#clockspan");

function showTime() {
    const date = new Date();
    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    clock.innerText = `${hour}:${minutes}:${seconds}`;

}
showTime();
setInterval(showTime, 1000);

let curentDate = document.querySelector("#curentDate");

function showDate() {
    const day = new Date()
    let year = day.getFullYear();
    let months = day.getMonth() + 1;
    let today = day.getDate();
    curentDate.innerText = `${year}/${months}/${today}`;

}
showDate()
setInterval(showDate, 1000);