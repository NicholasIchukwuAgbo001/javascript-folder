let currentDeposit = 0;
let bankAccount = {
    owner : "Alice",
    balance : 500,
    deposit : function deposit(depositAmount){
       currentDeposit = bankAccount.balance += depositAmount;
       return `deposit of ${depositAmount}, was successfull.`;
    },
    

    withdraw : function withdraw(withdrawAmount){
        if(withdrawAmount > currentDeposit ){
            return `Withdraw of ${withdrawAmount}, was not successful try again.`;
        } else{
            currentDeposit  -= withdrawAmount;
            return  `Withdraw of ${withdrawAmount}, was successful.`;
        }
    }
    
}
console.log(bankAccount.deposit(200));
console.log(bankAccount.withdraw(1000));
console.log(currentDeposit)