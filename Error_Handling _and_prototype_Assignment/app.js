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


// 2. Building Robust Functions in JavaScript

// Function to get person's name and age with error handling
function getPerson(person) {
    try {
        // Check if the input is an object and contains 'name' and 'age' properties
        if (typeof person !== "object" || person === null || !("name" in person) || !("age" in person)) {
            throw new Error("Invalid parameter type");
        }
        
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage
console.log(getPerson({ name: "Sang Zhi", age: 22 }));  
console.log(getPerson({ name: "Sang Zhi" })); 
console.log(getPerson(["name", "Sang Zhi"]));  



// 3. Car Description Class.
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);

// Calling the getDescription method
console.log(myCar.getDescription());



//  4. Employee Class Challenge.

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Creating an instance of the Employee class
const employee = new Employee("Indu Rani", "Fullstack Developer", 90000);

// Calling the getSalary method
console.log(employee.getSalary());



// 5. Implementing a Person Class with Default Values
class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Creating instances of the Person class
const person1 = new Person();
const person2 = new Person("Alice", 25);

// Calling the getDetails method
console.log(person1.getDetails()); // Output: Name: Unknown, Age: 0
console.log(person2.getDetails()); // Output: Name: Alice, Age: 25



// 6. Using Static Method to Add Two Numbers with Calculator Class
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// Calling the add method without instantiating the Calculator class
const sum = Calculator.add(5, 3);
console.log(sum); // Output: 8
