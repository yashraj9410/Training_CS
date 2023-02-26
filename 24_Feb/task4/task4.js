//promises are used to handle async operations in javascript 
//asynchronous means we do not know the amount is being taken 
//async operations can also be handeled by callbacks but the problem of inversuion occurs
// using call backs we are giving command to other part of program 
//promises are mainly used when we communicate between servers

const pr = new Promise((resolve,reject)=>{
    let p =1+1;
    if(p==2){
        resolve("the answer is correct ");
    }
    else{
        reject("not correct");
    }
})
pr.then((message)=>{                        // if resolved (.then) will be executed 
    console.log(message);       
}).catch((message)=>{                       // if rejected then (.catch ) will be executed 
    console.log(message);
})

//using promise with setTimeout();
let p = new Promise((resolve,reject)=>{
    console.log("Promise Pending ")
    setTimeout(()=>{
        reject(new Error("promise is not fulfilled "))
    },3000)  
})
console.log(p);
// if we do not want to throw error so we use catch to handle the error from the console 
//we can also make the use of promises inside of a function
// fetching data from apis and logging the response
function fetch_data(){
    return new Promise((resolve,reject)=>{                       //using promise to return the fetched api data 
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.text())                         // we can get the response either in json format or text format
        .then(data=> resolve(data))
    })
}

display_api_data=(data)=>{                                  //getting the data using resolve and displaying it on the console
    console.log(data);
}

fetch_data()
    .then(display_api_data);                                // fetching the success response 