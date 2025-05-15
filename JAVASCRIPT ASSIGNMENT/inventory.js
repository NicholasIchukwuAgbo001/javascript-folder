let inventory = {
    apple : 10,
    banana : 5,
    orange : 8,
    mango : 12,
}

for(let friutName in inventory){
    console.log(`${friutName} ${inventory[friutName]}`)
}