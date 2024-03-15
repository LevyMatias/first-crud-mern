const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Users = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud')

app.get('/', (req, res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    Users.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    Users.findByIdAndUpdate({_id:id}, req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.post('/create', (req, res) => {
    Users.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    Users.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});
    

app.listen(5173, () => {
  console.log('Server has started on port 5173');
});