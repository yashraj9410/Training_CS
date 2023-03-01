//creating a string array
const arr: Array<string> = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];                //given array
const newarr: Array<string | number> = []                                               //creating new array to push elements 

for (let i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) { newarr.push(arr[i].toUpperCase()); continue }        // checking for string and integers value 
    newarr.push(parseInt(arr[i]));                                                  // pushing the int after parsing it   
}

console.log(newarr);                                                                // printing the new array 
