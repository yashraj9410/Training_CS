// making the show data function 
let url = "http://localhost:3000/display"
let studentData = document.getElementById("student-data");
let inputElements = document.getElementsByClassName("input");
let button = document.createElement("button");
let submit = document.getElementById("submit");
let update = document.getElementById("update");
update.style.display = "none";

const showdata = async() => {

    studentData.innerHTML =" ";

    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
        studentData.innerHTML += `<img src="/uploads/${data[i].profile.data}" alt="${data[i].name}" style="width:100px; height:100px"><br><br>`;

        button.type = "button";
        button.value= data[i]._id;
        button.setAttribute("onclick" ,"edit(this.value)");
        studentData.appendChild(button);
        button.innerHTML ="Update/edit";
    }

} 

const edit = async(value) =>{
    let url = `http://localhost:3000/${value}`
    console.log(button.value);
    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);
    
   inputElements[0].value = data.name;
   inputElements[1].value = data.class;
   inputElements[2].value = data.roll_no;
   inputElements[3].value = data.subjects;
   update.style.display = "inline-block";
   submit.style.display="none";
   //inputElements[4].value = JSON.stringify(data.profile.data);

}