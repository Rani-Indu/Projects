// 1. Type Conversion.

// Function to convert string to number with error handling
function convertToNumber(str) {
    const number = Number(str);
    
    // Check if conversion is successful (not NaN)
    if (!isNaN(number)) {
        return number;
    } else {
        return "Invalid number";
    }
}

// Example usage
console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: "Invalid number"
