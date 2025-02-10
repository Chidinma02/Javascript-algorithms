let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };


   const listToArray=()=>{

    // array to hold output
    const output = [list.value];
    // creating a variable that holds current rest value in the object
    let currentRest = list.rest;
    // create a loop that will terminate when rest  is null
    while(currentRest != null){

        // within the loop,push the value at the current level into  array created 
        output.push(currentRest.value)
    // update the variable that holds the current rest, to the rest on the next level
        currentRest=currentRest.rest
       
    }
   
    return output

  }

  console.log(listToArray());