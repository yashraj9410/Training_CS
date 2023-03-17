// making the show data function 
let url = "http://localhost:3000/display"
let studentData = document.getElementById("student-data");
let inputElements = document.getElementsByClassName("input");
let button = document.createElement("button");
let buttonDel = document.getElementById("delete");
let submit = document.getElementById("submit");
let update = document.getElementById("update");
update.style.display = "none";
studentData.style.display="none";


// display all the data
const showdata = async() => {

    studentData.style.display="flex";

    studentData.innerHTML =" ";

    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
        studentData.innerHTML += `Profile:<img src="/uploads/${data[i].profile.data}" alt="${data[i].name}" style="width:100px; height:100px"><br><p>Name:${data[i].name}  Class:${data[i].class}  Roll_No:${data[i].roll_no} Subjetcs:${data[i].subjects}</p>`;

        button.type = "button";
        button.value= data[i]._id;
        button.setAttribute("onclick" ,"edit(this.value)");
        button.innerHTML ="Update/edit";
        studentData.appendChild(button);
        
    }

} 

const edit = async(value) =>{
    
    let url = `http://localhost:3000/${value}`
    console.log(button.value);
    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);
    console.log(inputElements);

   inputElements[0].value = data.name;
   inputElements[1].value = data.class;
   inputElements[2].value = data.roll_no;
   inputElements[3].value = data.subjects;
   update.style.display = "inline-block";
   submit.style.display="none";
   //inputElements[4].value = JSON.stringify(data.profile.data);

    // setting up the value of delete button
    buttonDel.value= value;
    buttonDel.setAttribute("formaction" ,`/${value}`);

}
