// making the show data function 
let url = "http://localhost:3000/display"
let studentImage = document.getElementById("student-data");

const showdata = async() => {

    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);
    for(let i=0;i<data.length;i++){
        studentImage.innerHTML =`<img src="${data[i].profile.data.data.toString('base64')}" style="width:100px; height:100px">`;
    }

} 