const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
require('dotenv').config();
const port = process.env.PORT;

const app = express();

/* Middleware. It must be above the route
let logger = (req, res, next) => {
    console.log('This is a middleware. It would run everytime my route is loaded');
    next();
}
app.use(logger) 
*/

//View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static Path
app.use('/public' ,express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.get('/search/:word', (req, res) => {
    res.render('search', {output: req.params.word});
});

app.get('/words', (req, res) => {
    res.render('words');
});

app.get('/spell', (req, res) => {
    res.render('spell');
});

app.get('/synonyms', (req, res) => {
    res.render('synonyms');
});


app.listen(port, () => {
    console.log(`Server has bagan on port ${port}`);
})