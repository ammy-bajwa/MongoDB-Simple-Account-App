var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todo')
var userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Add Your Name"],
        maxlength: 25
    },
    age: {
        type: Number,
        required: [true, "Please Add Your Age"],
        maxlength: 3
    }
});

var User = mongoose.model('Tasks', userSchema);

var amir = new User({
    name: 'Amir Ali',
    age:21
});
amir.save().then((doc) => {
    console.log(`Successfuly Saved  ${doc}`);
    mongoose.disconnect();
}, (err) => {
    mongoose.disconnect();
    throw err;
});

