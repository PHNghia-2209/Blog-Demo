const Course = require('../models/course.models');
const { multipleMongooseToOject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToOject(courses),
                });
            })
            .catch(next);
    }
    // [Get] /news/: slug
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
