const express = require("express");
const database = require("./config/db");
const app = express();
const task = require("./Router/taskRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", task);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
