const express = require('express');

const authorsRouter = express.Router();
function router(nav) {
var books = [
        {
            author: 'Joseph Barbera',
            works:'Tom and Jerry',
            img:'joseph.jpg',
            disc:"Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century."
            
    
        },
        {
            
            author: 'J K Rowling',
            works: 'Harry Potter',
            img:'jk.jpg',
            disc:"Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith."
        },
        {
            author: 'Hajime Isayama',
            
            works: 'Attack on Titan',

            img:'aot-isayama.jpg',
            disc:"Hajime Isayama (諫山 創, Isayama Hajime, born August 29, 1986) is a Japanese manga artist. His first serial, Attack on Titan (2009–2021), became one of the best-selling manga series of all time with 100 million copies in circulation as of December 2019."

        },
        {
            author: 'Tsugumi Ohba',
            works: 'Death Note',

            
            img:'dn-author.jpg',
            disc:"Tsugumi Ohba (Japanese: 大場 つぐみ, Hepburn: Ōba Tsugumi) is the pen name of a Japanese gensakusha or writer of manga, best known for authoring the Death Note manga series with illustrator Takeshi Obata from 2003 to 2006, which has 30 million collected volumes in circulation.[2] The duo's second series Bakuman. (2008–2012), was also successful with 15 million in circulation.[3] In 2014, Ohba collaborated with My Little Monster creator Robico for the one-shot 'Skip! Yamada-kun'.[4] Another series with Obata called Platinum End began in the December 2015 issue of Jump SQ on November 4, 2015."

        },
        {
            author: 'William Shakespeare',
            works: "A Midsummer Night's Dream",

            img:'shakespeare.jpg',
            disc:"William Shakespeare (bapt. 26 April 1564 – 23 April 1616)[a] was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.[2][3][4] He is often called England's national poet and the 'Bard of Avon' (or simply 'the Bard').[5][b] His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] They also continue to be studied and reinterpreted."

        }
        
    
    ];
    authorsRouter.get('/',function(req,res){
        
        res.render('authors',
        {
            nav,
             title: 'Library',
             books 
        }
        );
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title: 'Library',
            book: books[id]
    
        })
    
    });

    return authorsRouter;
    


};


module.exports = router;