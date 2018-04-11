var mongoose = require('mongoose');
const url = "mongodb://localhost:27017/AccountsDB";

mongoose.connect(url);
var userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please Add Your Name'],
        minLength: 3
    },
    age: {
        type: Number,
        require: [true, 'Please All Your Age'],
        minLength: 2
    },
    email: {
        type: String,
        require: [true, 'Please Add Your Email'],
        minLength: 6
    }
});

var User = mongoose.model('Users', userSchema);

module.exports = {
    mongoose, User
}
