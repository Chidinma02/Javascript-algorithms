var twoSum = function(nums, total) {
    let map = {}; // number => index

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let diff = total - current;

        if (map.hasOwnProperty(diff)) {
            return [map[diff], i]; // Found the pair
        }

        map[current] = i;
    }
};
console.log(twoSum( [2, 7, 11, 15],9))