const express = require('express');
const loginRouter = express.Router();

function router3(nav)
{ 
    
loginRouter.get('/', function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In',
       
    }
    );//passed as object
});
loginRouter.get('/signup', function(req,res){
    const id=req.params.id;
    res.render("signup",
    {
        nav,
        title:'Sign Up',
        
    }
    );//passed as object
});

loginRouter.get('/home',function(req,res){
    const id=req.params.id;
    res.render("home", 
    {
        nav,
        title:"home"
    });
});





return loginRouter;
}//fn router ends

module.exports=router3;//exporting to app.js