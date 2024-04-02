let button = document.querySelector(".button");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let dayText = document.querySelector(".daysText");
let monthText = document.querySelector(".monthsText");
let yearText = document.querySelector(".yearsText");

button.addEventListener("click", () => {

    let d = Number(day.value);
    let m = Number(month.value);
    let y = Number(year.value);
    let DedlineDate = new Date(y, m-1 , d+1);
    let now = new Date();
    let time = Date.parse(DedlineDate) - Date.parse(now)
    let days = Math.floor(time / (1000 * 60 * 60 * 24) % 30);
    let months = Math.floor(time / (1000 * 60 * 60 * 24 * 30) % 12);
    let years = Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12));
    dayText.innerHTML = addZero(days);
    monthText.innerHTML = addZero(months);
    yearText.innerHTML = addZero(years);
    


})
function addZero(num) {
    if (num < 10 && num >= 0) {
        return `0${num}`
    } else {
        return num
    }
}