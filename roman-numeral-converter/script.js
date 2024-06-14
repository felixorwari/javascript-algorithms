const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (!number.value) {
    outputEl.classList.add("text-red-900", "bg-red-200");
    outputEl.innerHTML = "<p>Please enter a valid number</p>";
    return;
  }
});