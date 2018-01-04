require('dotenv').config()
const User = require('./models/User')
const City = require('./models/City')
const Activity = require('./models/Activity')
const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost/places_data')

mongoose.connection.once('open',() => {
console.log(`Mongoose has connected to MongoDB`)



})

mongoose.connection.on('error', (error) => {
console.error(`MongoDB connection error!`)



}