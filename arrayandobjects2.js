let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };

//   let day2={}
//   Object.assign(day2,day1);
let day2={...day1,squirrel:true}
  console.log(day1);
//   day2.squirrel=true;
  console.log(day1);
  console.log(day2);

  let doh = "Doh";
console.log(typeofdoh.toUpperCase);