const router = require('express').Router();
const Database = require('../models/database');
const Person = require('../models/person');

const db = new Database();

router.get('/details/:id', (req, res) => {
    if (!Number(req.params.id)) {
        res.redirect('/list')
    } else {
        let person = new Person();
        db._connection.query(person.getPersonByIdQuery(req.params.id), (error, results, fields) => {
            if (results.length === 0) {
                res.redirect('/list');
            } else {
                res.render('details', { title: 'Details', person: results });
            }
        });
    }

});

module.exports = router;