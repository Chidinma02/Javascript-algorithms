function twoSum(nums, target) {
    let map = new Map(); // Create a map to store numbers and their indices
    console.log("Initial map:", map);
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]; // Find required number
      console.log(`Iteration ${i}:`);
      console.log(`  nums[i] = ${nums[i]}, complement = ${complement}`);
  
      if (map.has(complement)) { // Check if complement exists
        console.log(`  Found! Returning indices: [${map.get(complement)}, ${i}]`);
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i); // Store current number
      console.log(`  Map updated:`, map);
    }
  }
  
  // Run the function
  console.log("Result:", twoSum([2, 7, 11, 15], 9));
  