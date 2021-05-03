const express = require('express');
const addRouter = express.Router();

function router3(nav)
{ 
    
addRouter.get('/', function(req,res){
    res.render("add",
    {
        nav,
        title:'Log In',
       
    }
    );//passed as object
});

addRouter.get('/index',function(req,res){
    const id=req.params.id;
    res.render("index", 
    {
        nav,
        title:"home"
    });
});





return addRouter;
}//fn router ends

module.exports=router3;//exporting to app.js