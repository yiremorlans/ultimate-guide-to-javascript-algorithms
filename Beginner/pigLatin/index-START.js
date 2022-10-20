/* Translate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"

For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"

For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

// receiving a string, would i have to account for punctuation or other characters?
// returning a string

// create a array with vowels
// create a var for an empty str

// check the zero index for a vowel --> return word + way
//continue
// else if check the first index for a vowel --> word.slice(2) + word.slice(0,2) + ay

// else --> word.slice(1) + word[0] + ay

//return concatenated str

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

  function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}



console.log(pigLatin('pig'), 'igpay')
console.log(pigLatin('glove'), 'oveglay')
console.log(pigLatin('explain'), 'explainway')