const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel.js")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler( async (req, res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//@access public
const postContact = asyncHandler( async (req, res) =>{
    console.log("The body:", req.body);
    const {name, email} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("Error!");
    }
    const contact = await Contact.create({
        name, email,
    });
    res.status(201).json(contact);
});

//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContactId = asyncHandler( async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Update a contact
//@route PUT /api/contacts
//@access public
const updateContactId = asyncHandler( async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateContact);
});

//@desc Delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContactId = asyncHandler( async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const removeContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(removeContact);
});

module.exports = {getContact, postContact, getContactId, updateContactId, deleteContactId};