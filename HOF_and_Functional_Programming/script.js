// 1. Reverse String.

// Define input string
let input = "Hello World!";

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Delay execution by 2 seconds
setTimeout(() => {
    let reversed = reverseString(input);
    console.log("Reversed String:", reversed);
}, 2000);


// 2. Random Number Generator with Delay and Progress Indication:
// Define delay in seconds
let delay = 3;

// Countdown timer
let countdown = delay;
console.log(`Generating number in ${countdown} seconds...`);

let countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
        console.log(`Generating number in ${countdown} seconds...`);
    }
}, 1000);

// Generate a random number after the delay
setTimeout(() => {
    clearInterval(countdownInterval);
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    console.log(`Generated Number: ${randomNumber}`);
}, delay * 1000);



//  3. Build a feature for Store's Inventory.
// Exchange rate (1 USD = 80 INR)
const exchangeRate = 80;

// Store items with prices in USD
const storeItems = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 100 },
    { name: "Keyboard", price: 50 }
];

// Convert prices to INR using map()
const convertedItems = storeItems.map(item => ({
    name: item.name,
    priceInINR: item.price * exchangeRate
}));

// Display the converted prices
console.log("Prices in INR:", convertedItems);



// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// List of books with authors and publication years
const books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane smith", year: 2015 },
    { title: "Book Three", author: "michael brown", year: 2012 },
    { title: "Book Four", author: "lisa white", year: 2005 },
    { title: "Book Five", author: "david clark", year: 2021 }
];

// Function to capitalize author names
function capitalizeName(name) {
    return name.split(" ")
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(" ");
}

// Filter books published in 2010 or later and capitalize author names
const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        title: book.title,
        author: capitalizeName(book.author),
        year: book.year
    }));

// Display the filtered books
console.log("Filtered Books:", filteredBooks);


// 5. URL validation.
// Regular expression to match valid URLs
const urlRegex = /^(https?:\/\/)[\w\-~]+(\.[\w\-~]+)+$/;

// Function to check if a URL is valid
function isValidURL(url) {
    if (urlRegex.test(url)) {
        console.log(`Valid URL: ${url}`);
    } else {
        console.log(`Invalid URL: ${url}`);
    }
}


// Test cases
isValidURL("https://example.com");       // Valid
isValidURL("http://my-site.org");        // Valid
isValidURL("https://sub.domain.net");    // Valid
isValidURL("ftp://invalid-url.com");     // Invalid
isValidURL("example.com");               // Invalid
isValidURL("https://123.456");           // Valid
isValidURL("https://valid-domain.io");   // Valid


//  6. LinkedIn Profile URL Validator. 
// Regular expression to match valid LinkedIn profile URLs
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a LinkedIn profile URL is valid
function isValidLinkedInURL(url) {
    if (linkedinRegex.test(url)) {
        console.log(`Valid LinkedIn Profile URL: ${url}`);
    } else {
        console.log(`Invalid LinkedIn Profile URL: ${url}`);
    }
}

// Test cases
isValidLinkedInURL("https://www.linkedin.com/in/indu-rani123"); //  Valid
isValidLinkedInURL("https://www.linkedin.com/in/jane_rani");    //  Valid
isValidLinkedInURL("https://www.linkedin.com/in/user12345");   //  Valid
isValidLinkedInURL("http://www.linkedin.com/in/indurani");      //  Invalid (missing HTTPS)
isValidLinkedInURL("https://linkedin.com/in/raniindu");        //  Invalid (missing 'www.')
isValidLinkedInURL("https://www.linkedin.com/in/abc");        //  Invalid (too short)
isValidLinkedInURL("https://www.linkedin.com/in/this-username-is-way-too-long1234567890"); //  Invalid (too long)
isValidLinkedInURL("https://www.linkedin.com/in/invalid!name"); //  Invalid (special character '!')


