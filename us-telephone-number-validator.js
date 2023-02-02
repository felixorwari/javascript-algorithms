function telephoneCheck(str) {
  // regular expression matching valid US phone numbers
  // area code is required
  // if country code is included, it must match "1"
  const regex = /^(1\s?)?(\s?\(\d{3}\)\s?|\d{3}[\s-]?)(\d{3}[-\s]?\d{4}$)/g;
  return regex.test(str);
}
