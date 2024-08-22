module.exports = function sortMiddlewares(req, res, next) {

    res.locals._sort = {
        enabled: false,
        type: 'default',
    }
    if (req.query.hasOwnProperty('_sort')) {
        // res._sort.enabled = true
        // res._sort.type = req.query.type
        // res._sort.column = req.query.column

        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        })
    }



    next()
}