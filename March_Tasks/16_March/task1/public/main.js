let url = "http://localhost:2000/display";
const area = document.getElementById("getdetails");
const display = async() => {
    let response = await fetch(url);
    const {data} = await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
        area.innerHTML += `<img src="/uploads/${data[i].profile_pic}" alt="${data[i].name}" style="width:100px; height:100px"><br><br>`;
    }

   
}

