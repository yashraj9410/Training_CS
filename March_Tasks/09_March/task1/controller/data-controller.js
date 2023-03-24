// displaying the data and controlling the values
const user_data = require("../model/data-model");


// display all the booking data
const displayData =async(req,res)=>{
    console.log(req);
    const {name,num_people,_id,time,table,}=req.body;
    if(name?.trim()===" " && isNaN(num_people) && isNaN(_id) && time?.trim()==="" && table?.trim()===""){
        return res.status(400).json({message:"Data not Valid"});
    }
    let new_data;
    new_data = await  new user_data({
        name,
        num_people,
        _id,
        time,
        table,
    })
    new_data = await new_data.save();
    return res.status(200).json({new_data});
}
// deleteing the booking according to phone number 
const deleteBooking = async(req,res)=>{
    console.log(req);
    const {_id} = req.body;
    let deleteUser = await user_data.deleteOne({_id:_id});
    res.status(200).json({message:"Booking deleted successfully"+deleteUser});
}
// get all the booking details 
const getDetails =async(req,res)=>{
    let users;
    users = await user_data.find();
    res.status(200).json({users});
}

exports.getDetails =getDetails;
exports.displayData =displayData;
exports.deleteBooking =deleteBooking;