// promise object in javascript
//promise are used in parallel processing 
//promise can be used  in the place of callback functions nesting 

const p = new Promise((resolve,reject)=>{
    let p =1+1;
    if(p==2){
        resolve("the answer is correct ");
    }
    else{
        reject("not correct");
    }
})
p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

//we can also make the use of promises inside of a function
// fetching data from apis and logging the response

function fetch_data(){
    return new Promise((resolve,reject)=>{
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