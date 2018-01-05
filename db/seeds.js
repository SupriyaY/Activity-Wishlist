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
console.error(`MongoDB connection error!
${error}
`)
process.exit(-1)
})

User.remove({}).then(() => {
const Supsy = new User ({
username: 'sups_y',
name: 'Supriya',
photoUrl: ''

})

const miami = new City ({
    city_name: 'Miami',

})
const shoreClub = new Activity ({
activity_place: "Shore Club South Beach",
activity_name: "Brunch",
activity_address: "1901 Collins Ave, Miami Beach, FL 33139",
activity_description: "Boozey brunch and lounging poolside."
})

miami.activitiesToComplete.push(shoreClub)

})

const atlanta = new City ({
city_name: 'Atlanta'
})

const footballGame = new Actvity ({
activity_place: "Atlanta Falcons game",
activity_name: "Football game",
activity_address: "1414 Andrew Young International Blvd NW, Atlanta, GA 30313",
activity_description: "Football, beer, and hotdogs at Mercedes-Benz Stadium!"

.return sups_y.save()



.catch((error)