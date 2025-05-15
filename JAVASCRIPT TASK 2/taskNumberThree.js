const counter = {
  count: 5,
  step: 10,

   increment: function(){
    counter.count += counter.step;
  }
};



counter.increment();
console.log(counter.count);