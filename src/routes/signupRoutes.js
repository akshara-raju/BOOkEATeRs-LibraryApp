const express = require('express');

const signupRouter = express.Router();
function routers(nav) {

    signupRouter.get('/',function(req,res){
        
        res.render('signup',
        {
            nav,
             title: 'Signup',
             
        }
        );
    });
    signupRouter.get('/login', function(req,res){
        const id=req.params.id;
        res.render("login",
        {
            nav,
            title:'Log In',
            
        }
        );//passed as object
    });
    
    

    return signupRouter;
    


};


module.exports = routers;