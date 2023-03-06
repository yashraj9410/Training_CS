const User = require("../model/User")

// creating the READ user operation on database
const getAllUSers = async(req,res,next)=>{
    let users;
    try{ 
        users =await User.find();  // we can also use specific query to fetch data from database 
    } catch(err){
        return next(err)
    }
    if(!users){
        return res.status(500).json({message: "Internal Serval Error "});
    }

    // if everything is okay then
    return res.status(200).json({ users });
}

// Create User Operation on the database 
const addUser = async(req,res,next) => {
    const { name , email, password } = req.body;
    if(!name && name.trim() === "" && !email && email.trim() === "" &&  !password && password.trim() === "" && password.length<6){
        return res.status(422).json({ message: "Invalid Data "})  // unproccessable entity
    }
    let user;      // create a new user 
    try{
       user = new User({
            name,
            email,
            password
        });
        user = await user.save()  // save data to the database using await 
    } catch(err){
        return next(err);
    } 
    if(!user){
        return res.status(500).json({message: "Unable to save data  "});  // internal server error 
    }
    res.status(201).json({ user })    //something has been added
};  

// update the user with the id param  
const updateUser = async(req,res,next) => {
    const id = req.params.id;
    const { name,email,password } = req.body;
    if(!name && name.trim() === "" && !email && email.trim() === "" &&  !password && password.trim() === "" && password.length<6){
        return res.status(422).json({ message: "Invalid Data "})  // unproccessable entity
    }

    let user;      // create a new user 
    try{ 
        user = await User.findByIdAndUpdate(id , { name , email , password });
    }catch(err){
        return next(err);
    }

    if(!user){
        res.status(500).json({message:"unable to save user "})
    }

    return res.status(200).json({message:"updated successfully"});
}

// exporting the created functions to the user-routes 
exports.getAllUSers = getAllUSers;
exports.addUser = addUser;
exports.updateUser = updateUser;