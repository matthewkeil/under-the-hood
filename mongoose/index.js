const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const config = {
  _id: mongoose.Schema.Types.ObjectId,
  created: { type: Number, default: Date.now },
  emails: [String],
  // email: { type: GraphQLString, resolve: obj => obj.emails[0] },
  tokens: [String],
  // token: { type: GraphQLString, resolve: obj => obj.tokens[0] },
  passwords: [String]
  // password: { type: String, resolve: obj => obj.passwords[0] }
};

const User = new Schema(config);

console.log({}.constructor);
