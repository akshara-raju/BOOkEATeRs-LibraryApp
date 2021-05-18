const express = require('express');
const loginRouter = express.Router();
nav1 = [
    {
        link:'/books', name:'Book'
    },
    {
        link:'/authors', name: 'Author'
    },
    {
        link:'/admin',name :'Add Books'
    },
    {
        link:'/admin1',name:'Add Authors'
    },
    {
        link:'/logout', name:'Sign Out'
    }
];

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
loginRouter.get('/index',function(req,res){
    const id=req.params.id;
    res.render("index", 
    {
        nav,
        title:"home"
    });
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
        nav1,
        title:"home"
    });
});






return loginRouter;
}//fn router ends

module.exports=router3;//exporting to app.js