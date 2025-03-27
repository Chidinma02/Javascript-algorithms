class Vec{


    constructor(x,y){
       this.x = x;
       this.y = y;    }

    plus(vec)   {
       return new Vec (this.x+vec.x,this.y + vec.y) 
    }
}

let v1 = new Vec(3, 4);
let v2 = new Vec(1, 2);
let result = v1.plus(v2);
console.log(result);