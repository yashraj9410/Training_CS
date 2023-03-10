// displaying the data and controlling the values
const user_data = require("../model/data-model");


// display all the booking data
const displayData =async(req,res)=>{
    console.log(req);
    const {name,num_people,_id,time,table,}=req.body;
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

//updating a booking data 
const updatebooking =(req,res)=>{
    console.log(req);
    const {name,num_people,_id,time,table,}=req.body;
    console.log(user_data.find({_id:_id}));
    if(user_data.find({_id:_id})){
        let updatedData = user_data.findOneAndUpdate({_id:_id}, {name,num_people,_id,time,table,})
        return res.status(200).json({updatedData});
    }
    else{
        return res.status(400).json({message:"No user found please create new booking "})
    }
}

exports.displayData =displayData;
exports.deleteBooking =deleteBooking;
exports.updatebooking = updatebooking;