// const countryCodeRegex = /^(1\s?)?/;
// const areaCodeRegex = /(\(\d{3}\)\s?|\d{3}[-\s]?)/;
// const phoneNumberRegex = /([\d]{3}[-\s]?\d{4}$)/g;

const testRegex = /^(1\s?)?(\s?\(\d{3}\)\s?|\d{3}[\s-]?)(\d{3}[-\s]?\d{4}$)/;

const userInput = document.getElementById('user-input');
const inputForm = document.getElementById('validator-form');

const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

function validatePhoneNumber(e) {
  e.preventDefault();
  disableButton();

  const telephone = userInput.value;

  if (telephone === "") {
    alert("Please provide a phone number");
    enableButton();
    return;
  }

  if (testRegex.test(telephone)) {
    result.innerHTML = `Valid US number: ${telephone}`;
  } else {
    result.innerHTML = `Invalid US number: ${telephone}`;
  }
  enableButton();
  inputForm.reset();
  return;
}

function clear() {
  result.innerHTML = "";
  inputForm.reset();
  enableButton();
}

function disableButton() {
  checkButton.style.opacity = ".5";
  checkButton.setAttribute("disabled", true);
}

function enableButton() {
  checkButton.style.opacity = "1";
  checkButton.removeAttribute("disabled");
}

inputForm.addEventListener('submit', validatePhoneNumber);
clearButton.addEventListener('click', clear);
