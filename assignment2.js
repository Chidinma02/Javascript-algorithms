class group{
    constructor(){
      this.elements=[]
    }
    add(value){
      if (!this.elements.includes(value)){
        this.elements.push(value)
      }
    }

    delete(value){
        this.elements=this.elements.filter(item =>item !==value)
    }


    [Symbol.iterator](){
        
    }
    has(value){
        if(this.includes(value)){
            return true
        }
    }
}