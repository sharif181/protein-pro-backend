const db = require('../models')


const ContactUs = db.contactUs

const addContactUs = async (req, res)=>{
    let data = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        user_id: req.body.user_id,
        map_location: req.body.map_location
    }
    await ContactUs.create(data).then((contactUs)=>{
        return res.status(200).send(contactUs)
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({"message": err.errors[0].message})
    })
}

const allContactUs = async (req, res)=>{
    let contactUsList = await ContactUs.findAll()
    return res.status(200).send(contactUsList)
}

module.exports = {addContactUs, allContactUs}