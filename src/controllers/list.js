const router = require('express').Router();
const Database = require('../models/database');
const Person = require('../models/person');

const db = new Database();

router.get('/list', (req, res) => {
    let person = new Person();

    db._connection.query(person.getAllPersonsQuery(), (error, results, fields) => {
        if (error) res.status(400).send(error);
        res.render('list', {title: 'List', persons: results});
    });
});

module.exports = router;