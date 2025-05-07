function twosum(nums,target){

    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let complement = target-nums[i];
        if((map.has(complement))){
          return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}
console.log("Result:", two([2, 7, 11, 15], 9));



function two(nums,target){
    for(let i =0;i<nums.length;i++){
        for(let j=i+1;i<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}