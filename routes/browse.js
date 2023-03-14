const fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var loggedIn = true;

    var products = null;
    var productList = [];

    try {
        var rawData = fs.readFileSync('products.json');
        products = JSON.parse(rawData);
    } catch (err) {
        res.send('Error when retrieving from database');
        return;
    }

    var lineNumber = 0;
    for (const product in products) {
        
        var productName = products[lineNumber].title;
        var productPrice = products[lineNumber].price;
        var productImage = products[lineNumber].image;

        var newProduct = {
            title: productName, price: productPrice, image: productImage};

        productList.push(newProduct);
        
       
       var productTitle = req.body.title;

       lineNumber++;
    }

    

    res.render('browse', { title: 'Browse', productList: productList});
});


module.exports = router;