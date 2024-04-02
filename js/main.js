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

    if (d <= 0 || d > 31) {
        day.nextElementSibling.innerHTML = "Must be a valid day";
        day.style.border = "1px solid red";
        
        return; 
    }
    else if(m<= 0 || m > 12) {
        month.nextElementSibling.innerHTML = "Must be a valid month";
        month.style.border = "1px solid red";
        return;
    }
    else if (y <= 0) {
        year.nextElementSibling.innerHTML = "Must be a valid year";
        year.style.border = "1px solid red";
        return;
    }
    else {
        day.style.border = "1px solid green";
        month.style.border = "1px solid green";
        year.style.border = "1px solid green";
        day.nextElementSibling.innerHTML = "";
        month.nextElementSibling.innerHTML = "";
        year.nextElementSibling.innerHTML = "";
    }

   
    let DedlineDate = new Date(y, m - 1, d + 1);
    let now = new Date();
    let time =  Date.parse(now) -Date.parse(DedlineDate) 
    if (time < 0) {
        dayText.innerHTML = "00";
        monthText.innerHTML = "00";
        yearText.innerHTML = "00";
        alert("Dedline date is passed")

    }
    else {
        let days = Math.floor(time / (1000 * 60 * 60 * 24) % 30);
        let months = Math.floor(time / (1000 * 60 * 60 * 24 * 30) % 12);
        let years = Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12));
        dayText.innerHTML = addZero(days);
        monthText.innerHTML = addZero(months);
        yearText.innerHTML = addZero(years);

    }

})


function addZero(num) {
    if (num < 10 && num >= 0) {
        return `0${num}`
    } else {
        return num
    }
}