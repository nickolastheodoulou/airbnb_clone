const mongoose = require('mongoose');
const schema = mongoose.Schema;
mongoose.promise = Promise;

const userSchema = new schema({
    name : {type: String, unique: false},
    email : {type: String, unique: true},
    googleId : {type: String, unique: true},
});

const user = mongoose.model('user', userSchema);
module.exports = user;