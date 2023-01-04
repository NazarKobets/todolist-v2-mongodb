const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb+srv://admin-nazar:cRU42_6TGvi9%cL@cluster0.vqdimzy.mongodb.net/todolistDB');

const itemsSchema = {
    name: String
};

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item ({
    name: 'Welcome to your Todolist!'
});

const item2 = new Item ({
    name: 'This is your todolist'
});

item1.save();
item2.save();


const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('You\'ve succesfully started the db');
//     }
// });

app.get('/', (req, res) => {
    Item.find({item1, item2}, (err, results) => {
        res.render('list', {listTitle: 'Today', newListItems: foundItems});
    });
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
    // items.push(item);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('running on port 3000');
});