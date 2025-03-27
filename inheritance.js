// class List{

//     constructor(value,rest){
//         this.value = value;
//         this.rest = rest;
//     }

//     get length(){
//         return this.rest ? 1 + this.rest.length:1
//     }
// }

// let list3 = new List(3, null);       // Last item (end of the list)
// let list2 = new List(2, list3);      // Second item, pointing to list3
// let list1 = new List(1, list2);      // First item, pointing to list2

// console.log(list1);  
// console.log(list2);  
// console.log(list3);  


class Vec{

  constructor(x,y){
    this.x=x;
  this.y=y
  }
  
  
  // get plus(){
  //   return this.x+this.y
  // }

  plus(other){
    return new Vec(this.x + other.x,this.y+other.y);
  }

  minus(other){
    return new Vec(this.x - other.x,this.y-other.y);
  }
}


console.log(new Vec(7, 10).plus(new Vec(5, 3)));
// if (this.rest) {
//   return 1 + this.rest.length;
// } else {
//   return 1;
// }

// List { value: 1, rest: List { value: 2, rest: List { value: 3, rest: null } } }
// let list3 = new List(3, null);
// console.log(list3);


// Parent class (SuperClass)
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     return "Some generic animal sound";
//   }
// }

// // Child class (SubClass) that inherits from Animal
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Calls the constructor of Animal (SuperClass)
//     this.breed = breed;
//   }

//   makeSound() {
//     return "Woof! Woof!"; // Overriding the parent method
//   }
// }

// let animal = new Animal("Generic Animal");
// console.log(animal.name); // Output: Generic Animal
// console.log(animal.makeSound()); // Output: Some generic animal sound

// let myDog = new Dog("Buddy", "Golden Retriever");
// console.log(myDog.name); // Output: Buddy
// console.log(myDog.breed); // Output: Golden Retriever
// console.log(myDog.makeSound()); // Output: Woof! Woof!

// Parent class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   // Method to describe the animal
//   describe() {
//     return `This is a ${this.name}.`;
//   }
// }

// // Child class that inherits from Animal
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Calls the parent constructor
//     this.breed = breed;
//   }

//   // Method that calls the inherited method
//   introduce() {
//     return `${this.describe()} It is a ${this.breed}.`;
//   }
// }

// // Creating an instance of Dog
// const myDog = new Dog("Dog", "Golden Retriever");

// console.log(myDog.describe());  // Inherited from Animal
// console.log(myDog.introduce()); // Uses the inherited method inside a new method


// Parent class
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Method to describe the animal
//   describe() {
//     return `This is a ${this.name}, and it is ${this.age} years old.`;
//   }
// }

// // Child class
// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age); // Calls the parent constructor
//     this.breed = breed;
//   }

//   // Method that calls the inherited method
//   introduce() {
//     return `${this.describe()} It is a ${this.breed}.`;
//   }
  
// }

// // Creating an instance of Dog
// const myDog = new Dog("Buddy", 3, "Golden Retriever");

// console.log(myDog.describe());  // Inherited method from Animal
// console.log(myDog.introduce()); // Uses the inherited method inside its own

// // console.log( List(3,null) instanceof Animal)
// console.log(myDog instanceof Dog); 


class vec{

  constructor(x,y){
    this.x=x;
  this.y=y
  }
  
  
  get plus(){
    
  }
 
}