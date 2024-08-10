const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/sumo_education_dev', {
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('connect Fail');
    }
}
module.exports = { connect };
