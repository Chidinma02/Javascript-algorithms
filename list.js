let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

let data=list;

while (data != null){
    console.log(data.value);
    data=data.rest
}