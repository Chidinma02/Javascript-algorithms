function deepEqual(val1,val2){

    if(Object.keys(val1)==Object.keys(val2) ||(val1==val2)){
        return true;
    }else{
        return false;
    }
}

// console.log(comparison(obj, {here: {is: "an"}, object: 2}))
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));