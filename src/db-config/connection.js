const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/users-db", {
    //mongodb://localhost:27017
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection is successfull");
  })
  .catch((e) => {
    console.log(`MongoDB Connection error: ${e}`);
  });
