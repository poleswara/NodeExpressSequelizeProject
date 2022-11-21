const express = require("express");
const cors = require("cors");
const app = express();
const route = require("./routs/user.routs")(app);
const db = require("./models/db.index");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.get("/", (req, res) => {
    res.json({ message: "welcome to node application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});