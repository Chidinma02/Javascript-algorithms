class Collection{

    constructor(){
        this.elements=[]
    }

    insert(value){
        if(!this.elements.includes(value)){
            this.elements.push(value);
        }
    }

    delete(value){
        this.elements=this.elements.filter(item=>item !==value)
    }

    has(value){
        return this.elements.includes(value);
    }

    static createFrom(array){
        let collection = new Collection();
        for (let value of array){
            collection.insert(value);
        }
        return collection;
    }

//    [Symbol.iterator](){
//     let index = 0;
//     let elements = this.elements;

//     return{
//         next(){
//             if(index <elements.length){
//                 return {value: elements[index++],done:false};

//             }else{return{done:true}}
//         }
//     }
//    }


[Symbol.iterator](){
    let index=0
    let elements=this.elements;

    return{
        next(){
            if(index < elements.length){
                return {value: elements[index++],done:false}
            }
            else {
                return{done: true};
            }
        }
    };
}
}
let myCollection = Collection.createFrom([5, 10, 15, 5, 20]);
for (let value of myCollection) {
    console.log(value);
}
console.log(myCollection.elements); // [5, 10, 15, 20]

console.log(myCollection.has(10)); // true
console.log(myCollection.has(25)); // false

myCollection.insert(25);
console.log(myCollection.elements); // [5, 10, 15, 20, 25]

myCollection.delete(10);
console.log(myCollection.elements);