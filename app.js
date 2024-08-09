console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Exercise 1");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("");

//EXERCISE 1
//Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. 
//The program will then output the number of coin wrappers needed and the total amount in dollars.

//This program uses nested for loops to iterate and utilize a series of parallel arrays to calculate the total U.S. dollar amount of all the U.S. coins given in "coinsAmount".

//Declare Variables
let coinsAmount = [543, 45, 246, 1001];
let coinType = ["Penny", "Nickel", "Dime", "Quarter"];
let coinValue = [0.01, 0.05, 0.10, 0.25];
let wrapperCapacity = [50, 40, 50, 40];
let wrappersRequired = [0, 0, 0, 0];
let dollarAmount = 0;

//Runs for every value stored in the "coinsAmount" array
for (let i = 0; i < coinsAmount.length; i++)
{
    //Declare Variables
    let currentCoinAmount = coinsAmount[i];

    //multiplies the amount of coins at i by the coin's value at i
    dollarAmount += (coinsAmount[i] * coinValue[i]);

    //Calculates the wrappers required for each coin type.
    //executes if the amount of coins exceeds the capacity of a single coin wrapper
    if (coinsAmount[i] > wrapperCapacity[i])
    {
        do
        {
            wrappersRequired[i]++;
            coinsAmount[i] -= wrapperCapacity[i];
        } while (coinsAmount[i] > wrapperCapacity[i])
        
        if (coinsAmount[i] > 0)
        {
            wrappersRequired[i]++;
        }
    }
    //executes if there are coins but only enough to contain in a single coin wrapper
    else if (coinsAmount[i] > 0 && coinsAmount[i] <= wrapperCapacity[i])
    {
        wrappersRequired[i]++;
    }

    console.log(`${coinType[i]} wrappers required: ${wrappersRequired[i]}`);
}

console.log(`Total Dollar Amount: $${dollarAmount.toFixed(2)}`);

//EXERCISE 2
console.log("");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Exercise 2");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("");

//Give the total amount of each coin
//Convert the total amount of each coin into dollars (USD currency)
//Total amount Currency all together

let challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel',
                     'dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime',
                     'penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter',
                     'quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter',
                     'penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter',
                     'penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel',
                     'dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime',
                     'dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel',
                     'penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel',
                     'penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter',
                     'nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny',
                     'quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny',
                     'penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel',
                     'nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel',
                     'quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny',
                     'dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter',
                     'dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime',
                     'dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter',
                     'quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter',
                     'quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'];

let coinAmount = [0, 0, 0, 0];
let coinTypes = ["Penny", "Nickel", "Dime", "Quarter"];
let coinValues = [0.01, 0.05, 0.10, 0.25];
let convertedDollarAmount = [0, 0, 0, 0];
let totalCoinAmount = 0;

for (let i = 0; i < challengeData.length; i++)
{
    switch(true)
    {
        case (challengeData[i].toUpperCase() == coinTypes[0].toUpperCase()):
            coinAmount[0]++;
            break;
        case (challengeData[i].toUpperCase() == coinTypes[1].toUpperCase()):
            coinAmount[1]++;
            break;
        case (challengeData[i].toUpperCase() == coinTypes[2].toUpperCase()):
            coinAmount[2]++;
            break;
        case (challengeData[i].toUpperCase() == coinTypes[3].toUpperCase()):
            coinAmount[3]++;
            break;
    }
}

console.log(`Amount of pennies: ${coinAmount[0]}`);
console.log(`Amount of nickels: ${coinAmount[1]}`);
console.log(`Amount of dimes: ${coinAmount[2]}`);
console.log(`Amount of quarters: ${coinAmount[3]}`);

for (let i = 0; i < coinAmount.length; i++)
{
    convertedDollarAmount[i] += (coinAmount[i] * coinValues[i]);
    console.log(`${coinTypes[i]} Dollar Amount: $${convertedDollarAmount[i].toFixed(2)}`);
    totalCoinAmount += convertedDollarAmount[i];
}

console.log(`Total amount of all currency: $${totalCoinAmount.toFixed(2)}`);