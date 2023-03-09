// displaying the data and controlling the values
const user_data = require("../model/data-model");


// display all the booking data
const displayData =async(req,res)=>{
    console.log(req);
    const {name,time,table,bookingId}=req.body;
    let new_data;
    new_data = new user_data({
        name,
        time,
        table,
        bookingId,
    })
    new_data = await new_data.save();
    return res.status(200).json({new_data});
}