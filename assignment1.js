class Vec{

    constructor(x,y){
        this.x=x;
        this.y=y
    }


    plus(other){
        return new Vec( other.x+ this.x, other.y + this.y);
    }

    minus(other){
        return new Vec(other.x-this.x, other.y-this.y)
    }

    get length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}
let v1 = new Vec(2, 3);
let v2 = v1.plus(new Vec(4, 5));
 // Pass an instance of Vec
console.log(v2); // Vec { x: 6, y: 8 }
console.log(v2.length); 