const express = require('express');
const logoutRouter = express.Router();
function router(nav){

    logoutRouter.get('/', function(req,res){
        res.render("login",
        {
            nav,
            title:'Log In',
           
        }
        );//passed as object
    });
    return logoutRouter;
}
module.exports = router;