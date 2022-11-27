const express = require("express");
const router = new express.Router();
const User = require("../models/users-model");

router.get("/", (req, res) => {
  res.send("Hello from home page, this is basically index file of the");
});

//METHOD 1-------------------(Recomendet By Jubayer Ali)


// ""dv"" means Digital Vision, My Site https://digitalvision.store
router.post("/dv-user", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    const isUserCreate = await user.save();
    res.status(201).send(isUserCreate);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Fetch all My DV-User all user
router.get("/dv-user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Find DV-User by name---------------------------
router.get("/dv-user/:name", async (req, res) => {
  try {
    const userName = req.params.name;

    console.log(userName);
    const user = await User.find({ name: userName });
    console.log(user);

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(500).send(user); //user not found in db, 500 Internal server error
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/dv-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);

    const deleteUser = await User.findByIdAndDelete(userId);
    console.log(deleteUser);

    if (!deleteUser) {
      res.status(400).send("User not found");
    } else {
      res.status(200).send(deleteUser);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update user data by id
router.patch("/dv-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);

    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true, //It helps to return the updated user document
    });
    console.log(updateUser);

    if (!updateUser) {
      res.status(400).send("User not found");
    } else {
      res.status(200).send(updateUser);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//Find user by id---------------------------
// app.get("/dv-user/:id", async (req, res) => {
//   try {
//     const id_ = req.params.id;

//     console.log(id_)
//     const user = await User.findById(id_).exec();
//     console.log(user)

//     if (user) {
//       res.status(200).send(user);
//     } else {
//       res.status(500).send(user); //user not found in db, 500 Internal server error
//     }
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

//METHOD 2-------------------()
// app.post("/firstApi", (req, res) => {
//   console.log(req.body);
//   const user = new User(req.body);
//   //Method1-------
//   //   user.save(); //To save in db

//   //Method2 (Response back with error)-------
//   //   user
//   //     .save()
//   //     .then(() => {
//   //       res.send(user);
//   //     })
//   //     .catch((e) => {
//   //       res.send(e);
//   //     });

//   //Method 3 (Response back with error code)------------
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

module.exports = router;
