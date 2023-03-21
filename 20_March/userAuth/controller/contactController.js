// creating the api methods for routes
//@api/contacts/
const asyncHandler = require("express-async-handler");    // this package of node provides inbuilt try, catch methods for the async functions 
const Contact = require("../models/contactModel");
// async handler automatically writes the async code using the tre catch 


// get all contacts 
// @public   --> later we will do as private 
const getContacts = asyncHandler(async(req,res)=>{
    const contacts =await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});


// get a single contact using id 
const getContact = asyncHandler(async(req,res)=>{
    let id = req.params.id;

    const contact = await  Contact.findById(id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    return res.status(200).json(contact);
});


// create contacts 
// @public   --> later we will do as private 
const createContact = asyncHandler(async(req,res)=>{
    let {name,email,phone} = req.body;

    if(!name || !email || !phone){
         res.status(400);
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id,
    });

    res.status(200).json(contact);
});


// update contacts 
// @public   --> later we will do as private 
const updateContact = asyncHandler(async(req,res)=>{
    let id = req.params.id;
    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404);
        throw new Error("Mo user found for this id ");
    }

    if(contact.user_id.toString() !== req.user.id){          // checking if the contact belongs to the user with accessToken
        res.status(403);
        throw new Error("User is not aurthorised");
    }
      
    const updated_contact = await  Contact.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
        );

    //console.log(updated_contact);

    res.status(200).json(updated_contact);
})


// delete  contacts 
// @public   --> later we will do as private 
const deleteContact = asyncHandler(async(req,res)=>{
    const id = req.params.id;

    const contact = await Contact.findById(id)

    if(!contact){
        res.status(404);
        throw new Error("Mo user found for this id ");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User is not aurthorised");
    }

    const delete_contact = await Contact.findByIdAndDelete(id);

    return res.status(200).send(delete_contact);

});


exports.createContact =createContact;
exports.deleteContact =deleteContact;
exports.getContacts =getContacts;
exports.updateContact =updateContact;
exports.getContact =getContact;
