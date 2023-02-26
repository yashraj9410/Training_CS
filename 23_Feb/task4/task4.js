// creating a array of places
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

// function to check the source and disable the same for destination
function disabledest(select){
    let selectedcity =select.selectedIndex;
   for(let i=0;i<selectdest.options.length;i++){
        if(i===selectedcity){selectdest.options[selectedcity].disabled = "true"; continue;}
        selectdest.options[i].disabled = false;
   }
}

// function to check the destination and disable the same for the source 
function disablesource(select){
    let selectedtocity =select.selectedIndex;
    for(let i=0;i<selectsource.options.length;i++){
         if(i===selectedtocity){selectsource.options[selectedtocity].disabled = "true"; continue;}
         selectsource.options[i].disabled = false;
    }
 }
 
//function to display the current routes
let objarr=[];
function checkroute(){
    let sourceval = selectsource.options[selectsource.selectedIndex].value;
    let destinationval = selectdest.options[selectdest.selectedIndex].value;

    //checking through the array if value of source and destination already exsists 
    for(let i =0;i<objarr.length;i++){
        if(objarr[i].from === sourceval && objarr[i].to === destinationval ){return}
    }
    document.getElementById("message").innerHTML += sourceval + " to " +  destinationval + "<br>";
    let obj ={from:sourceval,to:destinationval};           //creating array to store from and to data 
    objarr.push(obj);
    
}

//function to clear the display area 
function clearmessage(){
    document.getElementById("message").innerHTML=" ";
}


