const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');




function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook', {
            nav,
            title:'Add Book'
        });
    });
   
     
    
    adminRouter.post('/add', function(req,res){
        var items = {

            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            about: req.body.about

        }
        var book = Bookdata(items);
        book.save(); //saving to database
        res.redirect('/books');
        
    });
    adminRouter.get('/:id',function(req,res){
        const id = req.params.id;
        
        Bookdata.deleteOne({_id:id})
        .then(function(books){
            res.redirect('/books');

        });
        
    
    });

    

    return adminRouter;

}
module.exports = router;

