console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");

function greet() {
    console.log("Hello from the greet function!");
}

greet();

type Person = {
    name: string;
    age: number;
};

const person: Person = {
    name: "Alice",
    age: 30
};

console.log(`Person: ${person.name}, Age: ${person.age}`);