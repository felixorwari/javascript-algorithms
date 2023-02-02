function convertToRoman(num) {
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

  let roman = '';
  const KEYS = Object.keys(TABLE);
  
  // disregard num if not a number
  if (isNaN(num) || num === 0) {
      return `"${num}" is not a number!`;
  }
  
  // convert using table
  for (let i of KEYS) {
    if (num >= TABLE[i]) {
      let q = Math.floor(num / TABLE[i]);
      roman += i.repeat(q);
      num -= TABLE[i] * q;
    }
  }  

 return roman;
}
