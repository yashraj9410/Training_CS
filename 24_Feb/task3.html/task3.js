//getting the element to display the use of mouse events  

let el = document.getElementById("text");

// using the onclick event
el.addEventListener("contextmenu" , (e)=>{e.preventDefault()});  // context menu will not open now on right click
el.addEventListener("click" , ()=>{el.innerHTML="onclick mouse event "}); // text will change on the click 
el.addEventListener("dblclick" , ()=>{el.innerHTML="dblclick mouse event "}); // text wll change on double click
el.addEventListener("mousedown" , ()=>{el.style.color="red"});  //text color will change to red when we click the element
el.addEventListener("mouseup" , ()=>{el.style.color="blue"});  //text color will change to red when we click the element
el.addEventListener("mouseenter" , ()=>{el.style.fontSize="3rem"});  //text color will change to red when we click the element
el.addEventListener("mouseleave" , ()=>{el.style.fontSize="2rem"});  //text color will change to red when we click the element
el.addEventListener("mouseover" , ()=>{el.innerHTML="mouse is moving over"});  //text will change whern mouse will move over the element
el.addEventListener("mouseout" , ()=>{el.innerHTML="mouse has moved out now"});  //text will change whern mouse will move over the element
el.addEventListener("mousemove" , ()=>{el.innerHTML="mouse is moving "});  //text will change whern mouse will move over the element


//mouse over works for the element as well as its child element 
//mouse move works for the current element when mouse by 1 pixel