class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a,b){
    if(Math.random()<0.2){
        return  a * b;
    }
    else{
        throw new MultiplicatorUnitFailure("Klunk")
    }
}

// function reliableMultiply(a,b){
//     try{
//         for(;;){
//       result=  primitiveMultiply(a,b)
//       return result
//     }
    
// }
//     catch{
//           throw new MultiplicatorUnitFailure("Klunk")
//     }
// }

function reliableMultiply(a,b){
  for(;;){
    try{
      return primitiveMultiply(a,b)
    }catch (e){
if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e; // rethrow unknown errors
      }
    }
  }
}

console.log(reliableMultiply(8, 8));