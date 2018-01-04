const mongoose = require('mongoose')
const schema = require('../schema')


const Activity = mongoose.model('Activity', Schema.ActivitySchema)

module.export = Activity