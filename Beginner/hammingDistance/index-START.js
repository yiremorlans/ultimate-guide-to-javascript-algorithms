/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let counter = 0

    if (stringA.length === stringB.length){ // edge case to ensure both are equal lengths
        for (let i=0; i<stringA.length; i++){
            if(stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                counter ++
            }
        }
    } else {
			return 'String is not equal length'
		}
	return counter
}

// receiving two string of equal length, could they have numbers or other characters? will there ever be an empty str? does mixed case count towards length of hamming distance?
// returning an integer that is the amount of times a str will vary 
// ('rover', 'river') // should return 1 
// ('denver', 'dinner') // should return 2
// iterate over strA and strB and compare each letter at a time
// add to tally when strA[i] !== strB[i]
// return the tally result

module.exports = hammingDistance