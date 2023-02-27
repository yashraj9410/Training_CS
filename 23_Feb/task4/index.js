let places =["Delhi","Mumbai","Bengaluru","Chennai","Kolkata"];

//creating new  option elements 
let selectsource = document.getElementById("source");
let selectdest = document.getElementById("destination");

//looping through the array for source 
for(let i=0;i<places.length;i++){
    let opt = document.createElement("option");
    opt.textContent=places[i];
    opt.value=places[i];
    selectsource.appendChild(opt);
}

//selecting through array for destinations
for(let i=0;i<places.length;i++){
    let opt2 = document.createElement("option");
    opt2.textContent=places[i];
    opt2.value=places[i];
    selectdest.appendChild(opt2);
}


//creating function to toggle disable 
let objarr=[]; // creating object to store from , to value 
function disabledest(select){ 
    let selectedcity =select.selectedIndex;
    // disabling the current source value in the destination list 
    for(let i=0;i<selectdest.options.length;i++){
        if(i===selectedcity){selectdest.options[selectedcity].disabled = "true"; continue}
        selectdest.options[i].disabled = false;      
   }

   // disabling the destination value for corresponding sources 
    for(let j =0;j<objarr.length;j++){
        if(objarr[j].from === select.value){
            for(let k=0; k< selectdest.length;k++){
                if(objarr[j].to === selectdest.options[k].value ){ selectdest.options[k].disabled = "true"}
            }
        }
   }   
}

// function to check the destination and disable the same for the source 
function disablesource(select){
    let selectedtocity =select.selectedIndex; 
    for(let i=0;i<selectsource.options.length;i++){
         if(i===selectedtocity){selectsource.options[selectedtocity].disabled = "true";}
         else{selectsource.options[i].disabled = false;}
    }

}

 function checkroute(){
    let sourceval = selectsource.options[selectsource.selectedIndex].value;
    let destinationval = selectdest.options[selectdest.selectedIndex].value;
    let obj = {from:sourceval,to:destinationval};
    objarr.push(obj);

    //validation if any value is empty 
    if(sourceval=="empty" || destinationval == "empty"){return};

    //print the current source and destination
    document.getElementById("message").innerHTML += sourceval + " to " +  destinationval + "<br>";


// resetting the control
    for(let i =0;i<selectsource.length;i++){
        selectdest.options[i].disabled= false;
        selectsource.options[i].disabled=false;
    }

    selectdest.selectedIndex =0
    selectsource.selectedIndex = 0;
    }

function clearmessage(){
    document.getElementById("message").innerHTML=" ";
    window.location.reload();
    }