/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//

function reverseString(text) {
    return text.split('').reverse().join('')
}

// let reverseString = text => [...text].reverse().join('')


function reverseString(text){
    let result = ''
    for (let i = text.length - 1; i >= 0; i--){
        result += text[i]
    }
    return result
} // i is the end of str.length, counts backward concatenating till the start

function reverseString(text) {
    let result = ''
    for (let letter of text) {      // word: algorithm 
        result = letter + result // first iteration -> a 
                                                // -> l a
                                                // -> g l a
    }
}

function reverseString(text) {
    if (!text) {
        return ''
    } else {
        return reverseString(text.substr(1)) + text[0]

    }
}

function reverseString(text){
    return  [...text].reduce((total, letter) => letter + total, '')
}


module.exports = reverseString