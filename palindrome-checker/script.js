// convert all alphanumeric chars to lowercase
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const form = document.getElementById("palindrome-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (!textInput.value) {
    alert("Please input a value");
    return;
  }

  result.textContent = isPalindrome(textInput.value) ? `${textInput.value} is a palindrome` : `${textInput.value} is not a palindrome`;
}

function removeNonAlphanumerics(str) {
  return str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
}

function reverseString(str) {
  return [...str].reverse().join("");
}

function isPalindrome(str) {
  return removeNonAlphanumerics(str) === reverseString(removeNonAlphanumerics(str));
}