const router = require('express').Router();
const Database = require('../models/database');
const Person = require('../models/person');

const db = new Database();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create', success: '', err: ''});
});

router.post('/create', (req, res) => {
    let {firstname, lastname, address, position, salary} = req.body;
    let person = new Person(firstname, lastname, address, position, salary);

    db._connection.query(person.getInsertQuery(), (error, results, fields) => {
        if (error) res.render('create', {title: 'Create', success: '', err: error.sqlMessage});
        res.render('create', {title: 'Create', success: 'Person added!',  err: ''});
    });
});


module.exports = router;