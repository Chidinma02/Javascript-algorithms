// class Example {
//     #privateProperty = "This is private";
  
//     showPrivateProperty() {
//       return this.#privateProperty; // Can be accessed within the class
//     }
//   }
  
//   const instance = new Example();
  
//   console.log(instance.showPrivateProperty()); 
  // Outputs: "This is private"
  
//   console.log(instance.#privateProperty); 
  // SyntaxError: Private field '#privateProperty' must be declared in an enclosing class


  // function Animal(){}
  // Animal.prototype.legs=4;
  // let dog = new Animal();
  // console.log(dog.legs);
  
  // dog.legs =3;
  // console.log(dog.legs);


  // symbols
  // const secretLength = Symbol("length");
  // let myTrip={
  //   length:2,
  //   0:"lankwitz",
  //   1:"basesss",
  //   [secretLength]:21500
  // }

  // console.log(myTrip[secretLength]);

  let remote = "OK"[Symbol.iterator]();
  console.log(remote.next());
  console.log(remote.next());
  console.log(remote.next());

  class List{
    constructor(value,rest){
      this.value=value;
      this.rest=rest;
    }

    static fromArray(array){
      let result = null;
      for(let i=array.length -1;i>=0;i--){
        result = new this(array[i],result)
      }
      return result;
    }
  }
console.log(List.fromArray([1, 2, 3]))
//  static method,belongs to a class,and not an object