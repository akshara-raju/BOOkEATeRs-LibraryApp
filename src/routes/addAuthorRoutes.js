const express = require('express');
const admin1Router = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addAuthor', {
            nav,
            title:'Add Author'
        });
    });
    admin1Router.post('/addAuthor', function(req,res){
        var items = {
            author: req.body.author,
            born: req.body.born,
            image: req.body.image
        }
        var author = Authordata(items);
        author.save();
        res.redirect('/authors')
    });
    return admin1Router;
};
module.exports = router;
