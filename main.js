
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


function findMax(arr) {
    return Math.max(...arr);
}


function findMin(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}


function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function fibonacci(num) {
    let sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}


console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"

const numbers = [5, 3, 9, 1, 7];
console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1
console.log(sumArray(numbers)); // Output: 25
console.log(filterArray(numbers, num => num > 5)); // Output: [9, 7]

console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacci(6)); // Output: [0, 1, 1, 2, 3, 5]
