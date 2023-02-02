function rot13(str) {
  // initialize the alphabet
  // credit to: https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
  const alphaChars = Array.from(Array(26)).map((e, i) => i + 'A'.charCodeAt()).map((x) => String.fromCharCode(x));

  let decoded = '';

  for (let i= 0; i < str.length; i++) {
    let index = alphaChars.indexOf(str[i]); // find positional index of character in alphabet 

    // handle non-alphabetic characters
    if (index === -1) {
      decoded += str[i];
      continue;
    }

    // shift index by 13 places
    index += 13;

    // loop back when you reach end of character list i.e 'Z'
    if (index >= alphaChars.length) {
      index -= alphaChars.length;
    }

    decoded += alphaChars[index];
  }

  return decoded;
}
