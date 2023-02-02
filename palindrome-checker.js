function palindrome(str) {
  // convert to lowercase
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  // reverse string
  let reversedString = [...str].reverse().join("");
  console.log(str)
  
  // check if string === reversedString;
  return (reversedString === str) ? true: false;
}
