function gettingarray(...arr){
 

//  const modified= [];
 const modified= [...arr];
 const reverse=[];

 for( let i=modified.length-1; i >=0;i--){
      
      reverse.push(modified[i]);
 }
 return reverse
}

console.log (gettingarray(2,3,3,3,3));