const Course = require('../models/course.models');
const { multipleMongooseToOject } = require('../../util/mongoose');
class MeController {
    // [Get] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({}).then(courses => res.render('me/stored-courses', {
            courses: multipleMongooseToOject(courses)
        })).catch(next)

    }
    // [Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}).then(courses => res.render('me/trash-courses', {
            courses: multipleMongooseToOject(courses)
        })).catch(next)

    }
}
module.exports = new MeController();
