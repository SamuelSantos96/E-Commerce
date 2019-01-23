var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/pt/4/4a/Age-of-Empire-1-cover.jpeg',
        title: 'Age of Empires',
        description: 'Nostalgia!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/91/WoW_Box_Art1.jpg/250px-WoW_Box_Art1.jpg',
        title: 'World of Warcraft',
        description: 'Also awesome? But of course it was better in vanilla...',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/StarCraft_II_-_Legacy_of_the_Void_cover.jpg/250px-StarCraft_II_-_Legacy_of_the_Void_cover.jpg',
        title: 'Starcraft II',
        description: 'Orks in Space!',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Sly_2_-_Band_of_Thieves_Coverart.png/220px-Sly_2_-_Band_of_Thieves_Coverart.png',
        title: 'Sly Cooper 2',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Sly_3.jpg/220px-Sly_3.jpg',
        title: 'Sly Cooper 3',
        description: 'Also Awesome!!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5f/Tf2_standalonebox.jpg/250px-Tf2_standalonebox.jpg',
        title: 'Team Fortress 2',
        description: 'Argh!',
        price: 15
    })
];
var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}