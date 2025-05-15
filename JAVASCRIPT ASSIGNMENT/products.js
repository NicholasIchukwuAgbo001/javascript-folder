const products = [
    {
        Id: 1,
        name: "Laptop",
        price: 1200,
        
    },

    {
        Id: 1,
        name: "Phone",
        price: 800,
        
    },

    {
        Id: 1,
        name: "Tablet",
        price: 500,
        
    },

    {
        Id: 1,
        name: "Desktop",
        price: 700
        
    },
];

let arr = new Array();

  const findExpensiveProduct = (products, threshold) =>{
    for(let result in products){
        if(products[result].price > threshold){
             arr.push(`${products[result].name} ${products[result].price}`);
            }
    }
    return arr;
}


console.log(findExpensiveProduct(products, 700))


