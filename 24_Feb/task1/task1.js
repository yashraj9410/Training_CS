// checking input validations for the data entered by the student 

//declaring some regular expressions to validate the input 
var namecheck = /^[a-z][a-z\s]*$/;
let regexpid =  /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
let branches = ["CSE","ME","CE","ECE","MCA","MBA"];
let emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
let err = document.getElementById("err");

//button function check onsubmit 
check_submit=()=>{
    
    let inputs = document.getElementsByClassName("input");            
    for(let i =0;i<inputs.length-1;i++){
        // check if any of the values are missing
        if(!inputs[i].value){alert("please enter the missing values "); break;} 
        //checking name validation                                      
        else if(inputs[i].name=="name"){
            if(inputs[i].value.length<3 || !namecheck.test(inputs[i].value)){alert("Please Correct your name ");break;}
        }
        // checking branch validation
        else if(inputs[i].name=="branch"){                                                                  
            let b=inputs[i].value.toUpperCase();
            if(branches.indexOf(b)<0){alert("branch not found ");break;}
        }
         // checking the id validations
        else if(inputs[i].name=="id"){                                                   
            let valid = regexpid.test(inputs[i].value);
            if(!valid || inputs[i].value.length!=8){alert("id should be alpha numeric and length should be 8");break;}
        }
         // checking roll number validations
        else if(inputs[i].name=="roll"){                                                                   
            if(inputs[i].value.length!=12){alert("Roll no should be of 12 digits")}
        }
        //checking mail validations
        else if(inputs[i].name=="email"){                                                                   
            if(!emailformat.test(inputs[i].value.toLowerCase())){alert("Email not Valid")}
        }
        err.innerHTML += +inputs[i].value+"<br>"; 
    }

    
}
