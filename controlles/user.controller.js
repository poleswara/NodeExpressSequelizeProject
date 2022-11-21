const db = require("../models/db.index");
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.UserCreate = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.create({
        name : name,
        email : email,
        password  : bcrypt.hashSync(password,8)
    })
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message : err.message || "Something Went Wrong....."
        });
    });
};

exports.UserUpdate = (req,res)=>{
    const bodyData = {
        name :req.body.name,
        email : req.body.email,
        password :bcrypt.hashSync(req.body.password,8) ,
    }
    User.update(bodyData,{
        where : {email : req.body.email}
    })
    .then(data=>{
        res.status(200).send({message : "user updated successfuly"});
    })
    .catch(err=>{
        res.status(400).send({
            message : err.message || "User Not Updated"
        })
    })
};