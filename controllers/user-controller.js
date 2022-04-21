const { User } = require("../models");

const userController = {
  // GET all users
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // GET one user by id AND populate thought and friend data
  // CREATE a user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
  // UPDATE a user by id
  // DELETE a user by id
  // *BONUS* User thoughts cascade upon deletion
};

module.exports = userController;
