module.exports = function(app) {
    app.get('/', (req, res) => res.render('index', {title: 'Home Page'}))
    app.get('/create', require('./create'));
    app.post('/create', require('./create'));
    app.get('/list', require('./list'));
    app.get('/details/:id', require('./details'));
    app.get('/delete/:id', require('./delete'));
    app.post('/delete/:id', require('./delete'));
    app.get('/edit/:id', require('./edit'));
    app.post('/edit/:id', require('./edit'));
    app.get('**', (req, res) => res.render('index', {title: 'Home Page'}))
}