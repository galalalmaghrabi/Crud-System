const mongoose = require("mongoose");
const User = require("../model/user.schema");
const URL =
  "mongodb+srv://galal:galal@cluster0.oxbar.mongodb.net/User?retryWrites=true&w=majority";
exports.addUser = (req, res) => {
  mongoose.connect(URL).then(() => {
    const user = req.body;
    const newUser = new User(user);
    try {
      newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });
};
exports.editUser = (req, res) => {
  mongoose.connect(URL).then(() => {
    console.log(req.params.id||'aa');
    User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    }).then(()=>{console.log(true)}
    ).catch(err=>{
        console.log(err)
    })
  });
};
exports.getAllUser = (req, res) => {
  mongoose.connect(URL).then(() => {
    try {
      User.find({}).then((users) => {
        res.status(200).json(users);
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
};
exports.del = (req, res) => {
  mongoose.connect(URL).then(() => {
    User.findOneAndDelete({ _id: req.body.id })
      .then(console.log("done delete"))
      .catch((err) => {
        console.log(err);
      });
  });
};
exports.getUser = (req, res) => {
  mongoose.connect(URL).then(() => {
    try {
      User.findById(req.params.id).then((user) => {
        res.status(200).json(user);
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
};
