class Collection {
    constructor() {
        this.elements = []; // Initialize an empty array
    }

    // Insert a value if it's not already in the collection
    insert(value) {
        if (!this.elements.includes(value)) {
            this.elements.push(value);
        }
    }

    // Check if a value exists in the collection
    has(value) {
        return this.elements.includes(value);
    }

    // Remove a value from the collection
    delete(value) {
        this.elements = this.elements.filter(item => item !== value);
    }

    // Static method to create a Collection from an array
    static createFrom(array) {
        let collection = new Collection();
        for (let value of array) {
            collection.insert(value); // Add only unique values
        }
        return collection;
    }
}

// Example usage
let myCollection = Collection.createFrom([5, 10, 15, 5, 20]);
console.log(myCollection.elements); // [5, 10, 15, 20]

console.log(myCollection.has(10)); // true
console.log(myCollection.has(25)); // false

myCollection.insert(25);
console.log(myCollection.elements); // [5, 10, 15, 20, 25]

myCollection.delete(10);
console.log(myCollection.elements); // [5, 15, 20, 25]
