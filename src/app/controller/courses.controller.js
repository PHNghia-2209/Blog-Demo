const Course = require('../models/course.models');
const { mongooseToOject } = require('../../util/mongoose');
class CourseController {
    // [Get] /courses/create Create Courses
    create(req, res, next) {
        res.render('courses/create')
    }
    // [POST] /courses/store View My Courses
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body
        formData.image = ` http://img.youtube.com/vi/${formData.videoId}/1.jpg`
        const course = new Course(formData)
        course.save().then(() => res.redirect('/courses/create')).catch(error => { })
    }
    // [Get] /courses/:id/edit  Update
    edit(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then(course => res.render('courses/edit', { course: mongooseToOject(course) })
            ).catch(next);
        // res.render('courses/edit')
    }
    // [Put] /courses/:id  Save Update
    update(req, res, next) {
        const formData = req.body
        formData.image = ` http://img.youtube.com/vi/${formData.videoId}/1.jpg`
        Course.findByIdAndUpdate({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/store/courses')
            ).catch(next);
    }
    // [Delete] /courses/:id  Remove
    remove(req, res, next) {
        Course.delete({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }
    // [Get] /courses/:slug   View 
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongooseToOject(course) })
            ).catch(next);
    }
}
module.exports = new CourseController();
