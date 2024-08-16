const Course = require('../models/course.models');
const { multipleMongooseToOject } = require('../../util/mongoose');
class MeController {
    // [Get] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([ Course.find({}),Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses,deletedCount]) => res.render('me/stored-courses', {
                deletedCount,
                courses: multipleMongooseToOject(courses),
            })).catch(next)


    }
    // [Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted: true}).then(courses => res.render('me/trash-courses', {
            courses: multipleMongooseToOject(courses)
        })).catch(next)

    }
}
module.exports = new MeController();
