const db = require("../models/db.index");
const User = db.user;
const Op = db.Sequelize.Op;

exports.UserCreate = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.create({
        name : name,
        email : email,
        password  :password
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
    User.update(req.body,{
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