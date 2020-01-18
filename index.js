const express = require('express');
const app = express();
const cors = require('cors');
const bparser = require('body-parser');
const path = require('path');
const router = require('./src/controllers/router');

app.set('view engine', 'ejs');
app.set('views', path.normalize(path.join(__dirname, 'src', 'views')));

app.use(cors());
app.use(bparser.urlencoded({extended: false}));
app.use(bparser.json());

router(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Listening to http://localhost:${port}`); 
});