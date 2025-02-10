// const allarray=[1,2,3,4,5];

// const newArray = allarray.filter(x=>x<3);

// console.log(newArray);

// const mappy=allarray.map(x=>x+5);
// console.log(mappy);

// const reducy=allarray.reduce((x,y)=>x+y)
// console.log(reducy);

// let arrays = [[1, 2, 3], [4, 5], [6]]

// const newarr =arrays.reduce((x,y)=>x.concat(y))
// console.log(newarr)


// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback(); // Call the callback function
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   // Call greet and pass sayGoodbye as a callback
//   greet("Alice", sayGoodbye);


  function myFilter(array,test){
    let result =[];
    for (let arr of array){
        if (test(arr)){
            result.push(arr)
        }
    }

    return result
  }

  function myMap(array,tranform){
    let result=[];
    for (let arr of array){
        tranform(arr)
        result.push(tranform(arr))
    }
    return result
  }

  function mySome(array,test){
    let result=[];
    for(let arr of array){
        test(arr)
        result.push(test(arr))
        if (result.length===0){
         return false
        }
        else{
            return true
        }
        // if(test(arr)){
        //     result.push(arr)
        //     return true
        // }
        // else{
        //     return false
        // }
    }
  }


  function mySome(array, test) {
    for (let element of array) {       // Loop over all elements in the array
      if (test(element)) {            // Test the current element
        return true;                  // If the test is true, return true immediately
      }
    }
    return false;                     // If no elements pass the test, return false after the loop
  }
  

  function squareEvenNumbers(array){
    let result = [];
    for(let arr of array){
        if( arr%2==0){
          let ans= arr*arr
          result.push(ans)
            
        }
       
    }
     return result
  }


  function myEvery(array, test) {
    
    for(let arr of array){
        if(!test(arr)){
            return false
        }
    }
    return true
  }

  function anarry(array1){
    
    const total=array1.reduce((a,b) =>a.concat(b),[]);
    return total
  }

  let array1 = [[1, 2, 3], [4, 5], [6]];
  console.log(anarry([[1, 2], [3, 4], [5]]));
//   console.log(myEvery([2, 3, 6], x => x % 2 === 0));
//   console.log(mySome([1, 3, 5], x => x % 2 === 0));
//   console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0)); 
// console.log(myMap([1, 2, 3], x => x * 3));
// console.log(mySome([1, 2, 3], x => x % 2 === 0));
// console.log(squareEvenNumbers([1, 2, 3, 4, 5]));


function higherOrder(value,test,update,body){

  while(test(value)){
    body(value)
    value=update(value)
  }
  
}