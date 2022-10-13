/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0
   for (let i=0; text.length; i++){
    if ('aeiou'.includes(text[i])) {
        count ++
    }
   }
   return count
}

function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
   for (letter of text.toLowerCase()){
    if (vowels.includes(letter)) {
        counter ++
    }
   }
   return counter
}


function vowelsCounter(text) {
   let matchVowels = text.match(/[aeiou]/gi)
   return (!matchVowels) ? 0 : matchVowels.length
}


module.exports = vowelsCounter;
