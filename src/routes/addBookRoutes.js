const express = require('express');
const upbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    upbookRouter.get('/',function(req,res){
        res.render('addBook', {
            nav,
            title:'Add Book'
        });
    });

    upbookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        
        Bookdata.findOne({_id:id})
        .then(function(books){
            res.redirect('/books');

        });
        
    
    });
    return upbookRouter;

}
module.exports = router;