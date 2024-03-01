let btn = document.querySelector("#btn");
let dayInput = document.querySelector("#day-input");
let monthInput = document.querySelector("#month-input");
let yearInput = document.querySelector("#year-input");
let dayResult = document.querySelector("#days-result");
let monthResult = document.querySelector("#months-result");
let yearResult = document.querySelector("#years-result");
let dayError = document.querySelector("#day-error");
let monthError = document.querySelector("#month-error");
let yearError = document.querySelector("#year-error");

let day;
let month;
let year;

const retrieveDay = () => {
  let message;
  day = dayInput.value;

  if (!day) {
    message = "This field is required";
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day < 1 || day > 30) {
      message = "Must be a valid day";
    }
  } else if (month == 2) {
    if (day < 1 || day > 28) {
      message = "Must be a valid day";
    }
  } else {
    if (day < 1 || day > 31) {
      message = "Must be a valid day";
    }
  }

  dayError.textContent = message;
};

const retrieveMonth = () => {
  let message;
  month = monthInput.value;

  if (!month) {
    message = "This field is required";
  } else if (month < 1 || month > 12) {
    message = "Must be a valid month";
  }

  monthError.textContent = message;
};

const retrieveYear = () => {
  let message;
  year = yearInput.value;

  if (!year) {
    message = "This field is required";
  } else if (year > new Date().getFullYear()) {
    message = "Must be in the past";
  }

  yearError.textContent = message;
};

const renderResult = () => {
  let date1 = new Date();
  let date2 = new Date(`${month}/${day}/${year}`);

  let totalTime = date1.getTime() - date2.getTime();
  let totalDays = Math.round(totalTime / (1000 * 3600 * 24));
  console.log(totalDays);

  let years = Math.floor(totalDays / 365);
  if (years < 0) years = 0;
  totalDays -= years * 365;
  let months = Math.floor(totalDays / 30);
  if (months < 0) months = 0;
  totalDays -= months * 31;
  let days = totalDays;

  dayResult.textContent = days;
  monthResult.textContent = months;
  yearResult.textContent = years;
};

btn.addEventListener("click", () => {
  retrieveYear();
  retrieveMonth();
  retrieveDay();
  renderResult();
});
