/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    const reversedText = text.toLowerCase().split('').reverse().join('')
    return reversedText === text
}

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index -1]      
    })
    return result 
}

function palindromeChecker(text) {
    let textLength = text.length
    for (let i=0; i< textLength/2; i++){
        if (text[i] !== text[textLength - 1 - i]){
            return false // if letter does not match, returns false
        }
    }
    return true // else it ran through loop without returning false
}



module.exports = palindromeChecker;