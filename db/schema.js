const mongoose = require('mongoose')
const Schema = moongoose.Schema

mongoose.Promise = global.Promise

const ActivitySchema = new Acivity({
activity_place: {
    type: String,
    required: [true, 'Activity place is required!']
},
acivity_name: {
    type: String,
    required: [true, 'Activity name is required!']

},
actvity_address: {
    type: String

},
activity_description: {
    type: String
},
visited: {
    type: Boolean
},
recommend_to_friends: Boolean
}, {
timestamps: {}
})

const CitySchema = new Schema (













)


















module.exports = {
    UserSchema,
    CitySchema,
    ActivitySchema
}