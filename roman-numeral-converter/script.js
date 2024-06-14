// table mapping roman numerals to arabic
const TABLE = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const romans = Object.keys(TABLE);

const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");
const numberInput = document.getElementById("number");

let romanOutput = "";

const errorClasses = ["text-red-900", "bg-red-200"];
const successClasses = ["text-green-900", "bg-green-200", "font-bold", "text-center", "text-5xl", "font-serif"];

convertBtn.addEventListener("click", handleConvert);

function handleConvert(e) {
  e.preventDefault();
  reset();

  const input = parseInt(numberInput.value)

  if (input <= 0) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
  } else if (isNaN(input)) {
    outputEl.textContent = "Please enter a valid number";
  } else {
    convertToRoman(input);
    outputEl.textContent = romanOutput;
    outputEl.classList.add(...successClasses);
    return;
  }
  outputEl.classList.add(...errorClasses);
}

const reset = () => {
  romanOutput = "";
  outputEl.textContent = "";
  outputEl.classList.remove(...errorClasses);
  outputEl.classList.remove(...successClasses);
}

const convertToRoman = (input) => {
  if (input > 0) {
    for (const roman of romans) {
      if (input >= TABLE[roman]) {
        let repeat = Math.floor(input / TABLE[roman]);
        romanOutput += roman.repeat(repeat);
        input -= TABLE[roman] * repeat;
        return convertToRoman(input);
      }
    }
  } else {
    return;
  }
}