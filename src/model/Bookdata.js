const express = require('express');

const mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
require('dotenv/config');
mongoose.connect('mongodb+srv://userone:userone@libraryfiles.bpm79.mongodb.net/BookEaters?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;
