const db = require('../models')
const {genSaltSync, hashSync, compareSync} = require('bcrypt')
const { sign } = require('jsonwebtoken')

const User = db.users


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const addUser = async (req, res) =>{
    let data = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }

    if(!validateEmail(data.email)){
        return res.status(400).send({"message": "Invalid email provided"})
    }
    if(!data.password || !data.confirm_password){
        return res.status(400).send({"message": "password and confirm password is required"})
    }
    if(data.password !== data.confirm_password){
        return res.status(400).send({"message": "password not matched"})
    }
    delete data.confirm_password
    const salt = genSaltSync(13);
    data.password = hashSync(data.password, salt)
    await User.create(data).then((user)=>{
        user.password = undefined
        return res.status(200).send(user)
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({"message": err.errors[0].message})
    })
    
}

const login = async (req, res) =>{
    if(req.body.email && req.body.password){
        await User.findOne({where: {email: req.body.email}}).then((user)=>{
            if(user){
                let obj = user.dataValues;
                const result = compareSync(req.body.password, obj.password)
                if(result){
                    obj.password = undefined
                    const jsontoken = sign({result: user}, process.env.PASS_HASH_CODE, {
                        expiresIn: "1h"
                    });
                    obj.accessToken = jsontoken
                    return res.status(200).send(obj)
                }else{
                    return res.status(400).send({"message": "invalid email or password"})
                }
                
            }
            return res.status(200).send({"message": "User not found"})
        }).catch((err)=>{
            return res.status(400).send({"message": "User not found"})
        })
    }else{
        return res.status(400).send({"message": "email and password is required"})
    }
    
}


const userList = async (req, res) =>{
    const users = await User.findAll({attributes: ['id', 'username', 'first_name', 'last_name', 'email', 'createdAt', 'updatedAt']})
    return res.status(200).send(users)
}

const userById = async (req, res) =>{
    const user = await User.findByPk(req.params.id);
    if (user === null) {
        return res.status(200).send({"message": 'Not found!'})
    } else {
        user.password = undefined
        return res.status(200).send(user)
    }
}

const deleteUser = async (req, res) =>{
    const user = await User.findByPk(req.body.id);
    if (user === null) {
        return res.status(200).send({"message": 'Not found!'})
    } else {
        await user.destroy().then(()=>{
            return res.status(200).send({"message": "user deleted"})
        })
    }
}

const updateUser = async (req, res) =>{
    const user = await User.findByPk(req.body.id);
    if (user === null) {
        return res.status(400).send({"message": 'Not found!'})
    } else {
        let data = {
            username: req.body.username ? req.body.username : user.username,
            first_name: req.body.first_name ? req.body.first_name : user.first_name,
            last_name: req.body.last_name ? req.body.last_name : user.last_name,
        }
        user.set(data)
        let obj = await user.save()
        obj.password = undefined
        return res.status(200).send(obj)
    } 
}

module.exports = {addUser, login, userList, userById, deleteUser, updateUser}