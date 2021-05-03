const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const nav = [
    {
        link:'/books', name:'Book'
    },
    {
        link:'/authors', name: 'Author'
    },
    {
        link:'/add',name :'Add Books'
    },
    
    {
        link:'/signup',name :'Sign Up'
    },
    {
        link:'/login',name :'Sign In'
    }
];





const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);


app.use(express.urlencoded({extended:true}));


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');



app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/add',addRouter);


app.get('/', function(req,res){
    res.render('index',
    {
        nav,
         title: 'Library' 
    }
    );
});
// one method direct to books.ejs

// app.get('/books',function(req,res){
//     res.render('books',
//     {
//         nav:[{link:'/books', name:'Book'},{link:'/author', name: 'Author'}], title: 'Library App' 
//     }
//     );
// });

//second method - creating a seperate route handler for books page alone



  



app.listen(port, ()=> {console.log("Server Ready at "+port)});