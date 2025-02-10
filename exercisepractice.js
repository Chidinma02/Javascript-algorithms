function range(start,end,step){
    // step=0;
    let totalarry=[]
    if(step>0){
        
        for(let i=start;i<=end; i += step){
            // totalarry=totalarry+i
            
            totalarry.push(i)
        }
        return totalarry;
    }else if(step<0){
        
        for(let i=start;i>=end; i += step){
            // totalarry=totalarry+i
            
            totalarry.push(i)
        }
        return totalarry;
    }
   
}

// function sum(arr){
//     let total =0;
//     for (let i=0;i<arr.length;i++){
//         total += arr[i];
//     }
//     return total
// }
// console.log(sum([2,3,3,3,4]));
//  console.log(range(2,20,5));
 console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)))
