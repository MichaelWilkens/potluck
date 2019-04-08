// Install/require dependencies
var express = require("express")
var exphbs = require("express-handlebars");

module.exports = function(app) {
    app.get('/signup', function(req, res){
        res.render('signup')
    })

    app.get('/event-info', function(req, res){
        res.render('event-info')
    })
};
