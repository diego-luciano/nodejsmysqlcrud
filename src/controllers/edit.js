const router = require('express').Router();
const Database = require('../models/database');
const Person = require('../models/person');

const db = new Database();

router.get('/edit/:id', (req, res) => {
    if (!Number(req.params.id)) {
        res.redirect('/list');
    }else {
        let person = new Person();

        db._connection.query(person.getPersonByIdQuery(req.params.id), (error, results, fields) => {
            if (error) {
                res.redirect('/list');
            }else {
                res.render('edit', {title: 'Edit', success: '', err: '', person: results});
            }
        });
    }
});

router.post('/edit/:id', (req, res) => {
    if (!Number(req.params.id)) {
        res.redirect('/');
    }else {
        let {firstname, lastname, address, position, salary} = req.body;
        let person = new Person(firstname, lastname, address, position, salary);

        db._connection.query(person.updatePersonQuery(req.params.id), (error, results, fields) => {
           res.redirect('/list')
        });
    }
});

module.exports = router;

