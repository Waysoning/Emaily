const moongose = require('mongoose');
const { Schema } = moongose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

moongose.model('users', userSchema);
