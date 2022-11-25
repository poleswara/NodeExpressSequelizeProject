module.exports = () =>{
    const user = require("../controlles/user.controller");
    var router  = require("express").Router();

    // User  End Points
    router.post("/creareuser",user.signUp);
    router.put("/updateuser",user.UserUpdate);
    router.get("/allusers",user.getAllUsers);
    router.delete("/user/:id",user.deteteUser);

    return router;
};