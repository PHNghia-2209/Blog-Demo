const newsRouter = require('./new.route');
const meRouter = require('./me.route');
const coursesRouter = require('./courses.route');
const newsSite = require('./site.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', newsSite);
}
module.exports = route;
