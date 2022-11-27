require("./db-config/connection");
// const User = require("./models/users-model");
const express = require("express");
const app = express();
const dvRouter = require("./routers/dv-router");
const port = process.env.PORT || 3000;

app.use(express.json()); //This is basically use to json decode comming from req body
app.use(dvRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
