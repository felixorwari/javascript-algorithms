// convert all alphanumeric chars to lowercase
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const form = document.getElementById("palindrome-form");

const removeNonAlphanumerics = (str) => str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

const reverseString = (str) => [...str].reverse().join("");

const isPalindrome = (str) => removeNonAlphanumerics(str) === reverseString(removeNonAlphanumerics(str));

const handleSubmit = (e) => {
  e.preventDefault();
  disableButton();

  const textInput = document.getElementById("text-input").value;

  if (!textInput) {
    alert("Please input a value");
    enableButton();
    return;
  }

  const resultText = isPalindrome(textInput) ? "" : "not";
  result.innerHTML = `<strong>${textInput}</strong> is ${resultText} a palindrome`;
  enableButton();
}

const disableButton = () => {
  checkButton.style.opacity = ".5";
  checkButton.setAttribute("disabled", true);
}

const enableButton = () => {
  checkButton.style.opacity = "1";
  checkButton.removeAttribute("disabled");
}

form.addEventListener("submit", handleSubmit);