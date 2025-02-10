function Range (start,end){
    let range=[]
    for(let i= start;i<=end;i++){
    //    range.push(i);
    range =  range + i
    }
  return range
}

console.log(Range(2,10));
// console.log("chi")

function sum(sum){
    let total=0;
    for(let i=0;i<sum.length;i++){
         total +=sum[i]
    }
    return total
}

console.log(sum([2,3,4,5,5,6]))
