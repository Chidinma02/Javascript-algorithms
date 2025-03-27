// Find two numbers in an array that add up to a target

function sumtwo(num,target){
     for(let i=0;i<num.length;i++){
        for(let j=i + 1;j<num.length;j++){
         
            if(num[j] + num [i] === target){
               return [i,j]
            }
        }
     }
}

function twoSum(nums, target) {
    let map = new Map(); // Create a Map to store numbers and their indices
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]; // Find the required number to reach the target
  
      if (map.has(complement)) { // Check if the complement exists in the map
        return [map.get(complement), i]; // Return the indices of the two numbers
      }
  
      map.set(nums[i], i); // Store the current number and its index
    }
  }

console.log(sumtwo([2,3,4,4,8],5))