//Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. 
//The program will then output the number of coin wrappers needed and the total amount in dollars.

let coinsAmount = [101, 34, 56, 64];
let coinType = ["Penny", "Nickel", "Dime", "Quarter"];
let wrapperCapacity = [50, 40, 50, 40];
let wrappersRequired = [0, 0, 0, 0];
let dollarAmount = 0;

for (let i = 0; i < coinsAmount.length; i++)
{
    let coinCount = 0;
    let currentCoin = coinsAmount[i];

    for (let j = 1; j <= currentCoin; j++)
    {
        switch(true)
        {
            case (coinType[i] == "Penny"):
                dollarAmount += 0.01;
                coinCount++;
                break;
            case (coinType[i] == "Nickel"):
                dollarAmount += 0.05;
                coinCount++;
                break;
            case (coinType[i] == "Dime"):
                dollarAmount += 0.10;
                coinCount++;
                break;
            case (coinType[i] == "Quarter"):
                dollarAmount += 0.25;
                coinCount++;
                break;
            default:
                console.log("Something went wrong.");
                break;
        }
    }

    //Calculates the wrappers required for each coin type.

    //executes if the amount of coins exceeds the capacity of a single coin wrapper
    if (coinCount > wrapperCapacity[i])
        {
            do
            {
                wrappersRequired[i]++;
                coinCount -= wrapperCapacity[i];
            } while (coinCount > wrapperCapacity[i])
            
            if (coinCount > 0)
            {
                wrappersRequired[i]++;
            }
        }
        //executes if there are coins but only enough to contain in a single coin wrapper
        else if (coinCount > 0 && coinCount <= wrapperCapacity[i])
        {
            wrappersRequired[i]++;
        }

        console.log(`${coinType[i]} wrappers required: ${wrappersRequired[i]}`);

/*
    switch(true)
    {
        //PENNIES CALCULATION
        case (coinType[i] == "Penny"):
            //executes if the amount of coins exceeds the capacity of a single coin wrapper
            if (coinCount > wrapperCapacity[i])
            {
                do
                {
                    wrappersRequired[i]++;
                    coinCount -= wrapperCapacity[i];
                } while (coinCount > wrapperCapacity[i])
                
                if (coinCount > 0)
                {
                    wrappersRequired[i]++;
                }
            }
            //executes if there are coins but only enough to contain in a single coin wrapper
            else if (coinCount > 0 && coinCount <= wrapperCapacity[i])
            {
                wrappersRequired[i]++;
            }

            console.log(`${coinType[i]} wrappers required: ${wrappersRequired}`);
            break;
        
        //NICKELS CALCULATION
        case (coinType[i] == "Nickel"):
            //executes if the amount of coins exceeds the capacity of a single coin wrapper
            if (coinCount > nickelWrapperCapacity)
            {
                do
                {
                    nickelWrappersRequired++;
                    coinCount -= nickelWrapperCapacity;
                } while (coinCount > nickelWrapperCapacity)
                
                if (coinCount > 0)
                {
                    nickelWrappersRequired++;
                }
            }
            //executes if there are coins but only enough to contain in a single coin wrapper
            else if (coinCount > 0 && coinCount <= nickelWrapperCapacity)
            {
                nickelWrappersRequired++;
            }

            console.log("Nickel wrappers required: " + nickelWrappersRequired);
            break;
        
        //DIMES CALCULATION
        case (coinType[i] == "Dime"):
            //executes if the amount of coins exceeds the capacity of a single coin wrapper
            if (coinCount > dimesWrapperCapacity)
            {
                do
                {
                    dimesWrappersRequired++;
                    coinCount -= dimesWrapperCapacity;
                } while (coinCount > dimesWrapperCapacity)
                
                if (coinCount > 0)
                {
                    dimesWrappersRequired++;
                }
            }
            //executes if there are coins but only enough to contain in a single coin wrapper
            else if (coinCount > 0 && coinCount <= dimesWrapperCapacity)
            {
                dimesWrappersRequired++;
            }

            console.log("Dime wrappers required: " + dimesWrappersRequired);
            break;
        
        //QUARTERS CALCULATION
        case (coinType[i] == "Quarter"):
            //executes if the amount of coins exceeds the capacity of a single coin wrapper
            if (coinCount > quartersWrapperCapacity)
            {
                do
                {
                    quartersWrappersRequired++;
                    coinCount -= quartersWrapperCapacity;
                } while (coinCount > quartersWrapperCapacity)
                
                if (coinCount > 0)
                {
                    quartersWrappersRequired++;
                }
            }
            //executes if there are coins but only enough to contain in a single coin wrapper
            else if (coinCount > 0 && coinCount <= quartersWrapperCapacity)
            {
                quartersWrappersRequired++;
            }

            console.log("Quarter wrappers required: " + quartersWrappersRequired);
            break;

        //DEFAULT CASE
        default:
            console.log("Something went wrong.");
            break;
    }
*/
}

console.log(`Dollar Amount: $${dollarAmount.toFixed(2)}`);