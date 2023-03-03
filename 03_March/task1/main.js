// restaurant boooking site 
let timeSlots = ["11AM", "12PM", "1PM", "2PM"]
let table = [
    { tabel: 1, capacity: 7 },
    { tabel: 2, capacity: 7 },
    { tabel: 3, capacity: 7 },
    { tabel: 4, capacity: 7 },
    { tabel: 5, capacity: 7 }
]

// array of objects from time and table value 
let objarr = [];

// selecting the DOM elements 
let read = document.getElementById("readtable")
let confirmArea = document.getElementById("confirm");
confirmArea.style.display = "none";
let display = document.getElementById("disp");
let inputArea = document.getElementById("inputContainer");
let selectArea = document.getElementById("selectContainer");

// creating the new booking function
const newBooking = () => {
    inputArea.innerHTML = "";
    display.innerHTML = ""
    selectArea.style.display = "flex";
    timeOptions.style.display = "block";
    tableOptions.style.display = "none";
    confirmArea.style.display = "block";
    document.getElementById("confirmButton").style.display = "block";
    document.getElementById("cancelButton").style.display = "none";
    let inputName = document.createElement("input");
    var inputPersons = document.createElement("input");
    inputName.placeholder = "Enter Your Name";
    inputName.type = "text"
    inputName.id = "name"
    inputPersons.placeholder = "Number of Persons";
    inputPersons.type = "number";
    inputPersons.id = "persons";
    inputArea.appendChild(inputName);
    inputArea.appendChild(inputPersons);
}

//creating the cancel booking function
const cancelBooking = () => {
    inputArea.innerHTML = "";
    display.innerHTML = ""
    confirmArea.style.display = "block";
    document.getElementById("cancelButton").style.display = "block";
    document.getElementById("confirmButton").style.display = "none";
    selectArea.style.display = "none";
    let input_book_Id = document.createElement("input");
    input_book_Id.placeholder = "Booking Id";
    input_book_Id.type = "number";
    input_book_Id.id = "bookId";
    inputArea.appendChild(input_book_Id);
}

// creating the options for tables 
let tableOptions = document.getElementById("table");
for (let i = 0; i < table.length; i++) {
    let opt = document.createElement("option");
    opt.textContent = table[i].tabel;
    opt.value = table[i].tabel;
    tableOptions.appendChild(opt);
}
tableOptions.style.display = "none";

//creating the options for the timeslots 
let timeOptions = document.getElementById("timeslot");
for (let i = 0; i < timeSlots.length; i++) {
    let opt = document.createElement("option");
    opt.textContent = timeSlots[i];
    opt.value = timeSlots[i];
    timeOptions.appendChild(opt);
}
timeOptions.style.display = "none";

//creating onchange function on time options and checking for the availability of table at that time slot
const changeTable = (select) => {
    tableOptions.style.display = "block";
    let timeIndex = select.selectedIndex;
    let timeVal = timeOptions.options[timeIndex].value;
    let num = document.getElementById("persons").value;
    for (let i = 0; i < tableOptions.length; i++) { tableOptions.options[i].disabled = false; }
    if (parseInt(num) > 0 && parseInt(num) < 7) {
        for (let i = 0; i < objarr.length; i++) {
            if (timeVal === objarr[i].Time) {
                for (let j = 0; j < tableOptions.length; j++) {
                    if (objarr[i].Table === tableOptions.options[j].value) {
                        tableOptions.options[j].disabled = true;
                    }
                }
            }
        }
    }

    else {
        alert("Max Seating Capacity is for 6 people , Please try again");
        window.location.reload();
    }
}

// confirm booking function
const confirmBooking = () => {
    let timeVal = timeOptions.options[timeOptions.selectedIndex].value;
    let tableVal = tableOptions.options[tableOptions.selectedIndex].value;
    let id = Math.floor(Math.random() * 10000);
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = timeVal;
    row.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = tableVal;
    row.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent=id;
    row.appendChild(td3);
    read.appendChild(row);
    let personName = document.getElementById("name").value
    display.innerHTML = `Booking Confirmed  with ID: ${id}`;
    let obj = { Name: personName, Time: timeVal, Table: tableVal, orderId: id };
    console.log(personName);
    console.log("Confirmed", obj);
    objarr.push(obj);
    localStorage.setItem(JSON.stringify(personName), JSON.stringify(obj));
    tableOptions.selectedIndex = null;
    timeOptions.selectedIndex = null;
    console.log(objarr)
}

// function for cancel booking 
const cancel = () => {
    let x = document.getElementById("bookId").value;
    let bookId = parseInt(x);
    for (let i = 0; i < objarr.length; i++) {
        if (objarr[i].orderId === bookId) { objarr.splice(i, 1) }
    }
    display.innerHTML = `Booking Cancelled`;
    console.log(objarr);
    let td = document.getElementsByTagName("td");
}