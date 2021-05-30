require("./utils/dbConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth.js");

// Middle-wares
app.use(cors());
app.use(express.json());

// routes
app.use("/users", auth);

app.listen(5000);
