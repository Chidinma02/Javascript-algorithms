function maxfinder(nums){

   let smallest=nums[0]
   let largest=nums[0]

   for(i=0;i<nums.length;i++){
    if(nums[i]<smallest){
        smallest=nums[i]
    }
     if(nums[i]>largest){
        largest=nums[i]
    }
   }

 return{smallest,largest}
}

 let numbers=[2,3,4,56,6,6,7,8]
console.log(maxfinder(numbers))
