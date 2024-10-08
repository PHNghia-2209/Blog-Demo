const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema({
    _id: { type: Number, }, 
    name: { type: String, required: true },
    description: { type: String },
    videoId: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug)

Course.plugin(AutoIncrement)

Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('Course', Course);
