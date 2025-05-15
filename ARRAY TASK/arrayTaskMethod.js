class ArrayTask {

testScorees = (score) => {
    const result = score.filter((item) =>{
        return item > 60
 });
    return result;
}

increaseTomResultByFive = (score) => {
    const result = score.map((score) =>{
        return score + 5
    }
    );
    return result;
}

squareOfEachNumber = (array) => {
    const result = array.map((item) =>{
         return item * item
        });
    return result;
}

afternoonClasses = (times) => { 
    const reesult = times.filter(time =>{ 
        return time.includes("PM")
 });
    return reesult;
}


sumTheAmountHeSpentInAllCategories(amounts) {
    let total = 0;
    for (let category in amounts) {
    total += amounts[category];
    }
    return total;
}

letterGrabeBaseOnStudentScore= (score) => {
    const result = score.map((item) => {
        if (item >= 90) {
            return "A";
        } else if (item >= 80) {
            return "B";
        } else if (item >= 70) {
            return "C";
        } else if (item >= 60) {
            return "D";
        } else {
            return "F";
        }
    });
    return result;
}

shoppingList = (items) => {
    const result = items.filter(item => item.isHealthy === true);
    return result;
  }



filterItemThatCostMoreThan100(orders) {
    return orders.filter(order => {
    const totalCost = order.items.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalCost <= 100;
    }).map(order => ({ id: order.id, totalCost: order.items.reduce((total, item) => total + item.price * item.quantity, 0) }));
}
  

}
  
    
 
module.exports = ArrayTask;
