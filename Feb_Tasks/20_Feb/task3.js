
//program for prime numbers

var a = prompt("enter any number: ");
var arr=[];
var arr1 =[];
var arr2=[];

// using for loop
function using_for(){
    for(let i=2;i<a;i++){
        for(let j=2;j<i;j++){                          // i is the initial value and j is a variable that will check every i value for prime or not
            if(i%j==0){
                break
            }
            else if(i==j+1){
                arr.push(i);
                console.log(i);
                
            }
        }
    }
   document.getElementById("for").innerHTML=arr;
}

//using while loop 
function using_while(){
    let i=2;
    while(i<a){
        let j=2;
        while(j<i){
            if(i%j==0){
                break
            }
            else if(i==j+1){
                arr1.push(i);
                console.log(i);
            }
            j++;
        }
        i++;
    }
    document.getElementById("while").innerHTML=arr1;
}

//using do while

function using_dowhile(){
    let i=2;
    do{
        for(let j=2;j<i;j++){
            if(i%j==0){
                break;
            }
            else if(i==j+1){
                arr2.push(i);
                console.log(i);
            }
        }
        i++;
    }
    while(i<a);
    document.getElementById("dowhile").innerHTML=arr2;
}


