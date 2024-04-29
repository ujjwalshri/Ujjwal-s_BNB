const mongoose = require('mongoose');
const {Schema} = mongoose;


const UserSchema  = new Schema({
    name: String, 
    email: {type: String, unique:true},
    password: String
})

const User = new mongoose.model('User',UserSchema);
module.exports =  User;


