const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
const sortMiddlewares = require('./app/middlewares/sort-middlewares.js');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// custom middlewares
app.use(sortMiddlewares);
// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sumEach: (a) => ++a
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
