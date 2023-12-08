// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2
const giveMeTwo = (x) => {
    return x = 2
}

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (a, b) => {
    return a + b
}

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (num1 ,num2) => {
    if (num1 > num2){
        return num1
    } else {
        return num2
    }

}

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
const isEven =(num) => (num) % 2 === 0
const evens = (nums) => {
    let newEvens = nums.filter(isEven)
    return newEvens
}


// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {
    let newArr = names.map((element, index, array) => {
        return `Hello, ${element}!`

    })
    return newArr
}

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {
    let newArr = words.filter((element, index, array)=>{
        if (element.length > 4)
        return element.toUpperCase();
    })
    return newArr
}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
