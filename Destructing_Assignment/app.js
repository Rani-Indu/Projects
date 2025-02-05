// 1. Count the occurrences.

// Function to count word occurrences
function wordCount(text) {
    // Convert text to lowercase and split into words
    let words = text.toLowerCase().split(/\s+/);

    // Create a Map to store word counts
    let wordMap = new Map();

    // Iterate over words and count occurrences
    words.forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

    return wordMap;
}

// Example input string
let inputText = "This is a test. This test is only a test";

// Count words
let wordFrequency = wordCount(inputText);

// Print the word counts
console.log("Word Frequency Count:");
wordFrequency.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});


// 2. Only unique items are allowed.

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example input array
let numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5, 8, 9, 1, 10];

// Remove duplicates
let uniqueNumbers = removeDuplicates(numbers);

// Print the unique numbers
console.log("Unique Numbers:", uniqueNumbers);



// 3. Swap the values.
// Function to swap two variables using destructuring
function swapValues(x, y) {
    [x, y] = [y, x]; // Swap values
    return [x, y];   // Return swapped values as an array
}

// Example usage
let x = 5, y = 10;
let swapped = swapValues(x, y);

console.log("Swapped Values:", swapped); // Output: [10, 5]


// 4. Access random elements.
// Function to extract first, second, and last elements
function extractElements(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least 2 elements");
        return [];
    }

    const [first, second, ...rest] = arr;  // Destructure first and second elements
    const last = rest.length ? rest[rest.length - 1] : second;  // Get last element

    return [first, second, last];
}

// Example usage
let num = [1, 2, 3, 4, 5];
let extracted = extractElements(num);

console.log("Extracted Elements:", extracted); // Output: [1, 2, 5]



// 5. Min and max values.
// Function to find max and min values in an array
function findMaxMin(arr) {
    if (arr.length === 0) {
        console.log("Array is empty!");
        return { max: null, min: null };
    }

    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Example usage
let nos = [5, 2, 7, 1, 9, 0,8];
let result = findMaxMin(nos);

console.log("Max and Min:", result); // Output: { max: 9, min: 1 }



// 6. Nested Objects.
// Function to extract name and street from a nested object
function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

// Sample object
const person = {
    name: "Indu",
    age: 30,
    address: {
        street: "street 4, Vivekanand Nagar",
        city: "Durg, 491001",
        state: "Chattisgarh",
    },
};

// Example usage
const output = extractNameAndStreet(person);
console.log(output); // Output: { name: 'Mithun', street: 'B8, Block B, Industrial Area.' }

