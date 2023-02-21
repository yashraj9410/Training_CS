//array,objects , array of objects 

//objects are type of variable which can hold large number of values in the form of key value pairs 

const obj1 ={
    firstname:"yash",
    lastname:"raj",
    age:20,
    fullname:function(){
        return this.firstname +" "+ this.lastname ;
    }
};

// the above is an object which has multiple values
//e.g firstname is the propertyName and yash is the property value 

// fetching the value out of the object

console.log(obj1.firstname);
console.log(obj1.fullname());
//we can also use function/methods insidde of the object

//ARRAYS

//array is a datatype that can hold multiple values 

let arr = ["yash" , "nancy" ,"shourya", "himanshu"];
console.log(arr[3]);

//array functions
arr.push("raj");                  //pushes element at the end 
arr.pop("nancy");                 // pops the last element of the array
console.log(arr.shift());         //shifts the first element out and print it 
arr.unshift("yash");
console.log(arr);                 // shifts element in the front of array

//splice and slice functions
// splice is used to add some items in the array after a given index with removal of some or none items after that index

arr.splice(2,0,"rahul","ram");

// 2 means after the index 2 , 0 means none removal
console.log(arr);

//the slice method in array is used to create a completely new array with new items that have been sliced out  after a given index of the current array

let arr2= arr.slice(2);
console.log(arr2);

// sort functions in array sare used to sort items of the array 

console.log(arr.sort());

// in case of integer value the arrray internally treats them as string only so we have to make our own function
let num =[23,45,100,79];
console.log(num.sort(function(a,b){return a-b;}));

//it is a compare function which computes a-b in which if a-b is negative then the element a is stored before b else if a-b==0 then no change if a-b=positive then element a after b 
//for descending order sort we just need to do b-a

//concatenating two arrays 
let arr3 = num.concat(arr);
console.log(arr3);


// ARRAY OF OBJECTS 

//creating an array of objects 
let objarr1 =[{firstname:"yash",lastname:"raj",age:29},
            {firstname:"sourya",lastname:"raj",age:24},
            {firstname:"mannu",lastname:"raj",age:24}];

//we can sort the integer values of object array with the help of sort function and compare function

console.log(objarr1.sort(function(a,b){return a.age - b.age; }));


// we can also sort the string values 
console.log(objarr1.sort(function(a,b){
    let x = a.firstname.toLowerCase();
    let y = b.firstname.toLowerCase();
    if(x<y){return -1}
    if(x>y){return 1}
    return 0;
}));

// adding a object to the array 
objarr1.push({firstname:"himansh", lastname:"rjau",age:24});
console.log(objarr1);

//finding objects using their propertyname and ascociated value 
let f = objarr1.find(f => f.age===24);                             // this will give the last item on the list 
console.log(f);

//finding multiple items that match a test case 
let filter = objarr1.filter(person=>person.age===24);
console.log(filter);

//transforming objects using map 
//it maps array of objects into array of different objects 
let test = objarr1.map(person => {
    if(person.age>25){
        return "disqualified";
    }
    return "qualified";
})

console.log(test);

//we can also add properties and create new array of objects  using the map 
let addtest = objarr1.map(person=>{
    let result ={
        "age": person.age,
        "status":"qualified"
    };
    if(person.age>25){
        result.status = "disqualified";
    }
    return result;
});
console.log(addtest);


//using foreach to add a property status to every obj in objarr1
let addstatus = objarr1.forEach(person =>{
    person.status="qualified";
    if(person.age>25){
        person.status= "disqualified";
    }
});
console.log(objarr1);

//checking for a particular property that it exists ,return true,false

console.log(objarr1.some(person => person.firstname ==="himansh"));

//