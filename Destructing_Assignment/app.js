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
