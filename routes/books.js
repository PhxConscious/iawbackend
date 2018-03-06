let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
    knex.raw('select * from lms_books')
        .then(function(data) {
            res.send(data.rows);
        })
});


//Show single user
router.get('/test', function (req, res, next) {
    knex.raw(`select * from lms_books`)
        .then(function (book) {
            res.send(book)
        })
});

module.exports = router;
