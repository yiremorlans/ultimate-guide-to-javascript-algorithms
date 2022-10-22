/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
	return array.filter(value => value)
}

//receiving an array with multiple values of different types 
//returning a new array with only truthy values
//declare an empty arr
//filter through current array by using boolean to evaluate each value



module.exports = falsyBouncer