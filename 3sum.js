var threeSum = function(nums) {
    const result = [];

    // Loop i from 0 to nums.length - 3 (inclusive)
    // We stop at nums.length - 2 because we need at least 2 more elements after i
    for (let i = 0; i < nums.length - 2; i++) {
        // Loop j from i+1 to nums.length - 2 (inclusive)
        // We stop at nums.length - 1 because we need at least 1 more element after j
        for (let j = i + 1; j < nums.length - 1; j++) {
            // Loop k from j+1 to nums.length - 1 (inclusive)
            for (let k = j + 1; k < nums.length; k++) {
                // Check if the sum of the triplet is zero
                if (nums[i] + nums[j] + nums[k] === 0) {
                    // Create a sorted triplet array to avoid duplicates in different orders
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

                    // Convert the triplet to a string key to compare with already found triplets
                    const key = JSON.stringify(triplet);

                    // Check if this triplet is not already in the result
                    if (!result.some(r => JSON.stringify(r) === key)) {
                        // Add the unique triplet to the result
                        result.push(triplet);
                    }
                }
            }
        }
    }

    return result;
};

console.log(threeSum( [-1,0,1,2,-1,-4]))