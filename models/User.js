const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "You must include a valid username!",
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    // thoughts: [thoughts],
    // friends: [users],
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //     getters: true
  //   },
  // }
);

// UserSchema.virtual("friendCount").get(function() {
//     return this.friends.length;
// })

const User = model("User", UserSchema);

module.exports = User;