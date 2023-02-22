
//fetching values
let p = document.getElementById("principal");
let i = document.getElementById('interest');
let t = document.getElementById('time');

//functions for input validations and error handling
function validateinput(p,i,t){
    try{
        if(isNaN(p,i,t)){throw "Invalid Values , Values should be number  "}
        if(p<=0 || i<=0 || t<=0){throw "Principal , Interest ,Time cannot be less than or equal to zero. "}
    }
    catch(err){
        document.write(err);
    }
}

//functions for simple and compound interest 
function simpleinterest(){
    a = parseFloat(p.value);
    b = parseFloat(i.value);
    c = parseFloat(t.value);
    validateinput(a,b,c);
    document.getElementById("output").innerHTML = `The Amount is : ${(a*b*c)/100}`;
}

function compoundinterest(){
    a = parseFloat(p.value);
    b = parseFloat(i.value);
    c = parseFloat(t.value);
    validateinput(a,b,c);
    document.getElementById("output").innerHTML = `The Amount is : ${(((1+b/100)**c)*a)-a}`;
}
///yash