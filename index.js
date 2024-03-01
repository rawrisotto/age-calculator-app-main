let btn = document.querySelector("#btn");

let dayDiv = document.querySelector("#day-input");
let monthDiv = document.querySelector("#month-input");
let yearDiv = document.querySelector("#year-input");

let dayInput = document.querySelector("#day-input input");
let monthInput = document.querySelector("#month-input input");
let yearInput = document.querySelector("#year-input input");

let dayResult = document.querySelector("#days-result");
let monthResult = document.querySelector("#months-result");
let yearResult = document.querySelector("#years-result");

let dayError = document.querySelector("#day-input p");
let monthError = document.querySelector("#month-input p");
let yearError = document.querySelector("#year-input p");

let test = document.querySelector("#year label");

let day;
let month;
let year;

const resetError = () => {
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    
    dayDiv.classList.remove("error-text");
    monthDiv.classList.remove("error-text");
    yearDiv.classList.remove("error-text");
    
    dayInput.classList.remove("error-border");
    monthInput.classList.remove("error-border");
    yearInput.classList.remove("error-border");
}

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

  if (message) {
    dayError.textContent = message;
    dayDiv.classList.add("error-text");
    dayInput.classList.add("error-border");
  }
};

const retrieveMonth = () => {
  let message;
  month = monthInput.value;

  if (!month) {
    message = "This field is required";
  } else if (month < 1 || month > 12) {
    message = "Must be a valid month";
  }

  if (message) {
    monthError.textContent = message;
    monthDiv.classList.add("error-text");
    monthInput.classList.add("error-border");
  }
};

const retrieveYear = () => {
  let message;
  year = yearInput.value;

  if (!year) {
    message = "This field is required";
  } else if (year > new Date().getFullYear()) {
    message = "Must be in the past";
  }

  if (message) {
    yearError.textContent = message;
    yearDiv.classList.add("error-text");
    yearInput.classList.add("error-border");
  }
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
  resetError();
  retrieveYear();
  retrieveMonth();
  retrieveDay();

  if (day && month && year) {
    renderResult();
  }
});
