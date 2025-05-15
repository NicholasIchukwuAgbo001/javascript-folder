class MyList{

    constructor(){
        this.counter = 0;
        this.element = [];
    }

    isEmpty(){
        return this.counter == 0
    }

    add(value){
        if(this.counter > this){
            throw new Error("List is full");
        }
        this.element[this.counter++] = value[0];
        return value;
    }

    size(){
        if(this.isEmpty()){
            return 0;
        }
        return this.counter;
    }

    get(index) {
        if (this.isEmpty()) {
          return "List is empty";
        }
        if (index < 0 || index >= this.counter) {
          return "Index out of bounds";
        }
        return this.element[index];
      }
      

      set(index, value) {
        if (this.isEmpty()) {
          return "List is empty";
        }
        if (index < 0 || index >= this.counter) {
          return "Index out of bounds";
        }
        this.element[index] = value;
        return value;
      } 


}

module.exports = MyList;