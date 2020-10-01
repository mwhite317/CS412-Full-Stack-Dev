const reverseString = (original) => {
  let reverse = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const allowed = alphabet + alphabet.toUpperCase();
  for (let i = original.length; i > 0; i--) {
    let letter = original[i - 1];
    if (allowed.includes(letter)) {
      reverse += letter;
    }
  }
  return reverse;
};

module.exports = { reverseString };
