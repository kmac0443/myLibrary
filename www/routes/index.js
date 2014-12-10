var express = require('express');
var router = express.Router();
var debug = require('debug')('library');
var fs = require('fs'),
    path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('app', {
        title: 'MyLibrary'
    });
});

router.get('/partial/:view', function(req, res, next) {
    res.render('partials/' + req.params.view, function(err, html) {
        if (err) {
            debug(err);
            next();
        } else {
            res.end(html);
        }
    });
});

// Default route -- catches all
router.get('/:view', function(req, res) {
    res.render(req.params.view, {}, function(err, html) {
        if (err) {
            debug(err);
            res.render('error', {
                message: err
            });
        } else {
            res.end(html);
        }
    });
});

module.exports = router;
