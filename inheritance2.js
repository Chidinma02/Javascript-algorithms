class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Adds another Vec to this Vec and returns a new Vec
    plus(vec) {
      return new Vec(this.x + vec.x, this.y + vec.y);
    }
  
    // Subtracts another Vec from this Vec and returns a new Vec
    minus(vec) {
      return new Vec(this.x - vec.x, this.y - vec.y);
    }
  
    // Getter to compute the length of the vector
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  // Example usage:
  let v1 = new Vec(3, 4);
  let v2 = new Vec(1, 2);
  
  console.log(v1.plus(v2));  // Vec { x: 4, y: 6 }
  console.log(v1.minus(v2)); // Vec { x: 2, y: 2 }
  console.log(v1.length);    // 5 (since √(3² + 4²) = 5)
  