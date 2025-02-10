let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
// function printAnimal(animalCount, animalName){
// let animalCountString=String(animalCount);
// while(animalCountString.length < 3){
//     animalCountString="0" + animalCountString;
// }
// return `${animalCountString} ${animalName}` 


// }


// function isEven(num){
//     if(num<0){
//         num=num*-1
//     }
//        if(num==0){
//         return true;
//        }else if(num==1){
//          return false;
//        }
//        else{
//         return isEven(num-2)

//        }
// }


// console.log(`num is ${isEven(-2)}`)




// function printFarmInventory(cows, chickens) {
// //     let cowString = String(cows);
// //     while (cowString.length < 3) {
// //       cowString = "0" + cowString;
// //     }
// // console.log(`${cowString} Cows`);
// printAnimal(cows,"Cows")

// console.log(printAnimal(cows,"Cows") )
//     // let chickenString = String(chickens);
//     // while (chickenString.length < 3) {
//     //   chickenString = "0" + chickenString;
//     // }
//     // console.log(`${chickenString} Chickens`);
// printAnimal(chickens,"Chickens")
//   }
//   printFarmInventory(7, 11);




//   function isitEven(number){
    
//     if(number==0){
//         return true;
//     }
//     else if (number==1){
//         return false;
//     }
//     else{
//       return  isitEven(number-2)
//     }
//   }
// console.log(isitEven(20))



// function makeFunc() {
//     const name = "Mozilla";

//     function displayName() {
//       console.log(name);
//     }
    
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  