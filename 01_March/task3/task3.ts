//creating a string array
const arr: Array<string> = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];                //given array
const newArr: Array<string | number> = []                                               //creating new array to push elements 

for (let i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) { newArr.push(arr[i].toUpperCase()); continue }        // checking for string and integers value 
    newArr.push(parseInt(arr[i]));                                                  // pushing the int after parsing it   
}

console.log(newArr);                                                                // printing the new array 

export { }