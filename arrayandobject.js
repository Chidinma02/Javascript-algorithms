// Object(day1).hasOwnProperty("squirrel")

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
//   // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false

  const result=Object(day1).hasOwnProperty("come");
  const day1Keys=Object.keys(day1);
  console.log(day1Keys);

  console.log(result);

//   const resultofanarray= day1Keys.includes("mystrign")
//   console.log(resultofanarray);
//   myArray.includes("yourString");





