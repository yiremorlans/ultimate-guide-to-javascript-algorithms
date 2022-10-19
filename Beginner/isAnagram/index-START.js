/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap= {}

        for (let letter of text) {
            if (!charMap.hasOwnProperty(letter)){
                charMap[letter] = 1
            } else {
                charMap[letter] += 1
            }
        }
        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringMapA = createCharMap(stringA)
        let stringMapB = createCharMap(stringB)

        for (let value in stringMapA) {
            if (stringMapA[value] != stringMapB[value]) {
                return false
            } 
        }
        return true
    } else {
        return false
    }
    
}

// make a str sanitizing function to call on stringA and stringB as to not repeat oneself
function isAnagram(stringA, stringB) {
    let nonLetters = [' ', '!', '?', '.', ',', '"']
    let transformA = stringA.split('').map(value => value.toLowerCase()).filter(value => {
        if (!nonLetters.includes(value)) {
            return value
        }
    }).sort()
    let transformB = stringB.split('').map(value => value.toLowerCase()).filter(value => {
        if (!nonLetters.includes(value)) {
            return value
        }   
    }).sort()

	return transformA.join('') === transformB.join('')
}

// receiving two strings, could have spaces and other characters in them
//return true or false
// sanitize the strs by transforming to lowercase
// remove any chars that are not letters
// sort the strs and compare

module.exports = isAnagram