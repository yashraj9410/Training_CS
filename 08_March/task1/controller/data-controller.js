// displaying the data and controlling the values



// display the html page 
const displayFile =(req,res)=>{
    console.log("html fetched")
    res.sendFile("../views/index.html");
}

exports.displayFile =displayFile;