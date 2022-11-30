const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/db.index");
// const Role = require("./controlles/role.controller");

// db.sequelize.sync({force : true})
// .then(()=>{
//   Role.Initial();
// })

db.sequelize.sync()

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "welcome to node application." });
});


require("./routs/user.routs")(app);
require("./routs/auth.routs")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});