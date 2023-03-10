// displaying the data and controlling the values
const user_data = require("../model/data-model");


// display all the booking data
const displayData =async(req,res)=>{
    console.log(req);
    const {time,table,name,num_people,_id}=req.body;
    let new_data;
    new_data = new user_data({
        time,
        table,
        name,
        num_people,
        _id
    })
    //new_data = await new_data.save();
    return res.status(200).json({new_data});
}



exports.displayData =displayData;