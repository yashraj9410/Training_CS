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


function disabledest(select){
   let selectedcity =select.selectedIndex;
    selectdest.options[selectedcity].disabled = "true";
   
}

function disablesource(select){
    let selectedcity =select.selectedIndex;
     selectsource.options[selectedcity].disabled = "true";
    
 }

