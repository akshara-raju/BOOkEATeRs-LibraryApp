const express = require('express');
const upauthorRouter = express.Router();

const Authordata = require('../model/Authordata');



function router(nav){

    upauthorRouter.get('/:id', function(req,res){
       
        const id = req.params.id;
        Authordata.findOne({_id:id}).then(function(author){
            res.render('authorEdit',{
                nav,
                id: id,
                title:'Edit Author',
                author
            });


        });
        
        upauthorRouter.post('/add/:id',function(req,res){
       
            const id = req.params.id;
    
            Authordata.updateMany({_id:id},{
                $set : {
                    
                    author : req.body.author,
                    born : req.body.born,
                    about : req.body.about,
                    image : req.body.image
                }
            }).then(function(authors){
               
                res.redirect('/authors');
                
    
    
            });
        });
    

       
       

        
 
    });







    return upauthorRouter;

}
module.exports = router;