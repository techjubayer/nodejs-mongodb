const mongoose = require("mongoose");
const validator = require("validator");

const userModule = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: [true, "Phone number already registered with another account"],
    validator(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Invalid mobile number, please check");
      }
    },
  },
  email: {
    type: String,
    min: 10,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address, please check");
      }
    },
  },

  address: [
    {
      pin: Number,
      state: String,
      country: String,
    },
  ],
});

const User = new mongoose.model("User", userModule);
module.exports = User;
