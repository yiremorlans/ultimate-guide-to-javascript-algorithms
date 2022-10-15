/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


function capSentence(text) {
  let testArr = text.split(' ')
  let resultArr = []
for (let i=0; i< testArr.length; i++){
  resultArr.push(testArr[i].slice(0,1).toUpperCase() + testArr[i].slice(1).toLowerCase())
}
return resultArr.join(' ')
}


function capSentence(text) {
	let newArr = text.split(' ')
	let resultArr = []
	newArr.forEach(value => 
    resultArr.push(value[0].toUpperCase() + value.slice(1).toLowerCase()))
	return resultArr.join(' ')
}

function capSentence(text) {
  let newArr = text.toLowerCase().split(' ')
  return newArr.map(value => {
    return value[0].toUpperCase() + value.slice(1)
  }).join(' ')

}

function capSentence(text) {
  let newArr = text.toLowerCase().split(' ')
  return newArr.map(value => value[0].replace(value[0], value[0].toUpperCase()) + value.slice(1)).join(' ')
}


//receiving a str of characters, mixed case, possibly numbers and other characters as str
//returning a str with the first letter of each word uppercase
//check each word in the sentence
//uppercase the 0 index of each word, and lowercase the rest
//return the value
module.exports = capSentence