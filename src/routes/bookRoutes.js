const express = require('express');

const booksRouter = express.Router();
const Bookdata = 
require('../model/Bookdata');
function router(nav) {
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img:'t&j.png',
    //         disc: 'Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters.'
    
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img:'hp.jpg',
    //         disc:'Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.'
    //     },
    //     {
    //         title: 'Attack on Titan',
    //         author: 'Hajime Isayama',
    //         genre: 'Dark Fantasy',
    //         img:'aot.jpg',
    //         disc:"Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. 'The Attack Titan') is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother. Attack on Titan was serialized in Kodansha's monthly Bessatsu Shōnen Magazine from September 2009 to April 2021 and has been collected into 33 tankōbon volumes as of January 2021."

    //     },
    //     {
    //         title: 'Death Note',
    //         author: 'Tsugumi Ohba',
    //         genre: 'Thriller',
    //         img:'deathnote.webp',
    //         disc:"Death Note (デスノート, Desu Nōto) is a manga series created by writer Tsugumi Ohba and illustrator Takeshi Obata. The series centers around a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face."

    //     },
    //     {
    //         title: "A Midsummer Night's Dream",
    //         author: 'William Shakespeare',
    //         genre: 'Comedy',
    //         img:'midsum.jpg',
    //         disc:"A Midsummer Night's Dream is a comedy written by William Shakespeare c. 1595 or 1596. The play is set in Athens, and consists of several subplots that revolve around the marriage of Theseus and Hippolyta. One subplot involves a conflict between four Athenian lovers."

    //     }
        
    
    // ];
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',
        {
            nav,
             title: 'Library',
             books 
        }
        );


        })
        
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title: 'Library',
                book
        
            });

        });
        
    
    });

    return booksRouter;
    


}


module.exports = router;