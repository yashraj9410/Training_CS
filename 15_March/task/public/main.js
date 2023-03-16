// making the show data function 
let url = "http://localhost:3000/display"
let studentImage = document.getElementById("student-data");

const showdata = async() => {

    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
        studentImage.innerHTML += `<img src="/uploads/${data[i].profile.data}" alt="${data[i].name}" style="width:100px; height:100px"><br><br>`;
    }

} 