function insert(numbers){

    numbers.push(0)
    for(let i=numbers.length-1;i>2;i--){
        numbers[i] = numbers[i-1]
    }
    numbers[2] = 30
    return numbers
}

  
    let numbers = [10, 20, 40, 50];
    console.log(insert(numbers));
