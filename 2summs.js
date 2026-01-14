function twoSum(nums,target){
    let map = {}

    for(let i = 0;i<nums.length;i++){
        let current = nums[i];
        let diff = target -current;
        if(map.hasOwnProperty(diff)){
            return [map[diff],i];
        }

        map[current] = i;
    }
}
console.log(twoSum( [2, 7, 11, 15],9))
