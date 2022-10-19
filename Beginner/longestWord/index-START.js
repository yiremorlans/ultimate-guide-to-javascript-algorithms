/* CHALLENGE
Given a sentence, return the longest word in the string. 
longestWord('Top Shelf Web Development Training on Scotch') --> should return 'Development'
*/



function longestWord(text) {

    let maxValue = 0
    let longestWord = ''
    let splitText = text.split(' ')

    for (let word of splitText) {
        if (word.length > maxValue) {
            maxValue = word.length
            longestWord = word
        }
    }
    return longestWord
}

function longestWord(text) {
    
	let splitText = text.split(' ')
	return splitText.sort((a, b) => b.length - a.length)[0]
}


function longestWord(text) {

    let splitText = text.split(' ')
    return splitText.reduce((total, value) => {
        if (value.length > total.length) {
            return value
        } else {
            return total
        }
    }, '')
}

// receiving a sentence in a str
//returning the longest word in the string
//set a var for longest word and maxvalue = 0
//iterate through each word
// use .length of word to set the maxValue
// store word if above conditon is true
//return the longestword var

module.exports = longestWord