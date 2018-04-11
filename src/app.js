const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/AccountsDB";

app.use(bodyParser.json());

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    if (!mongodb.ObjectID.isValid(id)) throw err;
    mongodb.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('AccountsDB');
        dbo.collection('users').deleteOne({
            _id: mongodb.ObjectID(id)
        }).then((doc) => {
            res.end(`Deleted successfully ${doc}`)
        }, (err) => {
            res.sendStatus(400);
        })
    })
});

app.patch('/users/:id', (req, res) => {
    var id = req.params.id;
    if (!mongodb.ObjectID.isValid(id)) throw err;
    mongodb.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('AccountsDB');
        dbo.collection('users').updateOne({
            _id: mongodb.ObjectID(id)
        }, {
                $set: {
                    name: 'Amir Ali'
                }
            }).then((doc) => {
                if (doc.n == 0) {
                    res.end(`Account Not Found`);
                };
                res.end(`updated successfully ${doc}`);
            }, (err) => {
                res.sendStatus(400);
            })
    })
});

app.post('/users', (req, res) => {
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
    var user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });
    user.save().then((doc) => {
        res.send(`saved successfuly ${doc}`);
        res.end('This is end');
    });
});
app.use((req, res, next) => {
    mongodb.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db('AccountsDB')
        dbo.collection('users').find({}).toArray().then((accounts) => {
            res.send({ accounts });
            db.close();
        }, (err) => {
            throw err;
        });

    });
})

app.get('/users', (req, res) => {
    res.send('<h1>Hello To The Mongo Data Base</h1>');
    res.end('This is end')

});




console.log('server is up');

app.listen(3000);