//Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. 
//The program will then output the number of coin wrappers needed and the total amount in dollars.

//This program uses nested for loops to iterate and utilize a series of parallel arrays to calculate the total U.S. dollar amount of all the U.S. coins given in "coinsAmount".

//Declare Variables
let coinsAmount = [543, 45, 246, 1001];
let coinType = ["Penny", "Nickel", "Dime", "Quarter"];
let wrapperCapacity = [50, 40, 50, 40];
let wrappersRequired = [0, 0, 0, 0];
let dollarAmount = 0;

//Runs for every value stored in the "coinsAmount" array
for (let i = 0; i < coinsAmount.length; i++)
{
    //Declare Variables
    let currentCoinAmount = coinsAmount[i];

    //Runs for every coin in the current coin amount
    for (let j = 1; j <= currentCoinAmount; j++)
    {
        //Adds a coin's value based on the current iterated coin type and keeps track of the amount of c
        switch(true)
        {
            case (coinType[i] == "Penny"):
                dollarAmount += 0.01;
                break;
            case (coinType[i] == "Nickel"):
                dollarAmount += 0.05;
                break;
            case (coinType[i] == "Dime"):
                dollarAmount += 0.10;
                break;
            case (coinType[i] == "Quarter"):
                dollarAmount += 0.25;
                break;
            default:
                console.log("Something went wrong.");
                break;
        }
    }

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