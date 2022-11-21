module.exports = () =>{
    const user = require("../controlles/user.controller");
    var router  = require("express").Router();

    // End Points
    router.post("/creareuser",user.UserCreate);
    router.put("/updateuser",user.UserUpdate);
    router.get("/allusers",user.getAllUsers);

    return router;
};