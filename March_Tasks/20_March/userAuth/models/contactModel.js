const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,                                         // creating a reference to the user model using the user id 
        ref:"User",
    },
    name:{
        type:String,
        required:(true,"please add the contact name")
    },
    email:{
        type:String,
        required:(true,"please add the contact email")
    },
    phone:{
        type:String,
        required:(true,"please add the contact phone")
    },
},
    {
        timestamps:true,
    }
);


module.exports = mongoose.model("Contact", contactSchema);