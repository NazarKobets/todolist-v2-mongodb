const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/todolistDB');

app.get('/', (req, res) => {
    const day = date.getDate();

    res.render('list', {listTitle: day, newListItems: items});
});


app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});


app.get('/work', (req, res) => {
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.post('/work', (req, res) => {
    const item = req.body.newItem;
    items.push(item);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('running on port 3000');
});