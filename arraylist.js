class ArrayList {
    constructor(initialCapacity = 1) {
        this.capacity = initialCapacity;
        this.length = 0;
        this.arr = new Array(this.capacity);
    }

    push(value) {
        if (this.length >= this.capacity) {
            this._resize();
        }
        this.arr[this.length++] = value;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        return this.arr[index];
    }

    set(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        this.arr[index] = value;
    }

    _resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    currentLength() {
        return this.length;
    }

    currentCapacity() {
        return this.capacity;
    }
}

const list = new ArrayList();

list.push(10);
list.push(20);
console.log(list.get(0));           // 10
console.log(list.currentLength()); // 2
console.log(list.currentCapacity()); // 2 (since it doubles as needed)
