// restaurant boooking site 
// selecting the DOM elements 
let readDiv = document.getElementById("readDiv");
readDiv.style.display = "none"
let read = document.getElementById("readtable")
let confirmArea = document.getElementById("confirm");
confirmArea.style.display = "none";
let display = document.getElementById("disp");
let inputArea = document.getElementById("inputContainer");
inputArea.style.display ="none";

// creating the new booking function
const newBooking = () => {
    display.innerHTML = ""
    inputArea.style.display ="block";
    timeOptions.style.display = "block";
    tableOptions.style.display = "none";
    confirmArea.style.display = "none";
    document.getElementById("confirmButton").style.display = "block";
    document.getElementById("cancelButton").style.display = "none";
}

//creating the cancel booking function
const cancelBooking = () => {
    display.innerHTML = ""
    inputArea.style.display="none";
    confirmArea.style.display = "block";
    document.getElementById("cancelButton").style.display = "block";
    document.getElementById("confirmButton").style.display = "none";
}

// creating the options for tables 
let tableOptions = document.getElementById("table");
tableOptions.style.display = "none";

//creating the options for the timeslots
let timeOptions = document.getElementById("timeslot");
timeOptions.style.display = "none";

//creating onchange function on time options and checking for the availability of table at that time slot
const changeTable = async(select) => {
    tableOptions.style.display = "block";
    let timeIndex = select.selectedIndex;
    let timeVal = timeOptions.options[timeIndex].value;
    let num = document.getElementById("persons").value;
    const url = "http://localhost:2000/display";                             //fetching data from the api
    const response = await fetch(url);
    const {data} = await response.json();
    console.log(data);
    for (let i = 0; i < tableOptions.length; i++) { tableOptions.options[i].disabled = false; }
    if (parseInt(num) > 0 && parseInt(num) < 7) {

        for(let i=0;i<data.length;i++){
            if(timeVal === data[i].time){
                for(let j =0;j<tableOptions.length;j++){
                    if(data[i].table=== tableOptions.options[j].value){
                        tableOptions.options[j].disabled = true;                //disabling the table value
                    }
                }
            }
        }
    
    }
    else{
        alert("Max Seating Capacity is for 6 people , Please try again");
    }
}

// confirm booking function
const confirmBooking = () => {
    display.innerHTML = `Booking Confirmed  with ID: ${id}`;
}

// function for cancel booking 
const cancel = () => {
    let x = document.getElementById("phone").value;
    let bookId = parseInt(x);
    display.innerHTML = `Booking Cancelled with id:${bookId}`;
}

// getting data from the database and displaying to the user in table
const showBooking = async(table)=>{   
    readDiv.style.display="";
    table = document.querySelector("table");
    let tablehead = table.querySelector("thead");
    let tablebody = table.querySelector("tbody");
    const url = "http://localhost:2000/display";
    const response = await fetch(url);
    const {data} = await response.json();
    console.log(data);
    // clear table 
    tablehead.innerHTML="<tr></tr>";
    tablebody.innerHTML=" ";
    //setiing the text content
    for( let key in data[0]){
        const headElement = document.createElement("th");
        headElement.textContent = key;
        tablehead.querySelector("tr").appendChild(headElement);
    }

    for(let i=0;i<data.length;i++){
        const row = document.createElement("tr");
        for(let key in data[i]){
            const data_td = document.createElement("td");
            data_td.textContent= data[i][key];
            row.appendChild(data_td);
        }
        tablebody.appendChild(row);
    }
}
