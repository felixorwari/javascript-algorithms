const brick = "!"
const pyramidSize = 10;
let courses = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + brick.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i < pyramidSize; i++) {
  if (inverted) {
    courses.unshift(padRow(i, pyramidSize));
  } else {
    courses.push(padRow(i, pyramidSize));
  }
}

let result = ""

for (const row of courses) {
  result = result + "\n" + row;
}

console.log(result);