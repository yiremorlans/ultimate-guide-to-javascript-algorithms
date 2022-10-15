/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let hashmap = {}
    let maxLetter = ''
    let maxValue = 0

    for (let letter of text) {
        if (!hashmap.hasOwnProperty(letter)){
            hashmap[letter] = 1
        } else {
            hashmap[letter] ++ 
        }
    }

	for (let letter in hashmap) {
		if (hashmap[letter] > maxValue) {
			maxValue = hashmap[letter]
			maxLetter = letter
		}
	}
    return maxLetter
}

function maxRecurringChar(text) {
    let hashmap = {}
    let letterArr = []
    let valueArr = []
    let maxValue = 0

    for (let i=0; i<text.length;i++) {
        if (!hashmap.hasOwnProperty(text[i])) {
            hashmap[text[i]] = 1
        } else {
            hashmap[text[i]] ++
        }
    }
    
    letterArr = Object.keys(hashmap)
    valueArr = Object.values(hashmap)
    maxValue = Math.max(...valueArr)

    return letterArr[valueArr.indexOf(maxValue)]
}



//receive a str, could have nums as string, and other characters. will I have to account for empty str? will the casing alternate?
//returning the str char that occurs the most in the str
//maxRecurringChar('Balloons') -> 'l'
//iterate through chars in string
//check if they exist in empty object
//if letter does not exist, add it to object, assign it value of 1
//if it does, then ++ the value
//then iterate through object with key/value pairs for th

module.exports = maxRecurringChar;