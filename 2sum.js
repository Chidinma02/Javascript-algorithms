var twoSum = function(nums,total){


    let res = [];
    // nums = nums.sort((a,b)=>a-b);

    for(let i =0;i<nums.length-1;i++){

        for(let j=i+1;j<nums.length;j++){
          

            if((nums[j] +nums[i])===total){
              res.push(i,j);
            }


        }
        
    }
    return res
}
console.log(twoSum( [2, 7, 11, 15],9))