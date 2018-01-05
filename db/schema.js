const mongoose = require('mongoose')
const Schema = moongoose.Schema

mongoose.Promise = global.Promise

const ActivitySchema = new Activity({
    activity_place: {
        type: String,
        required: [ true, 'Activity place is required!' ]
    },
    acivity_name: {
        type: String,
        required: [ true, 'Activity name is required!' ]

    },
    activity_address: {
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

const CitySchema = new Schema({

    city_name: {
        type: String,
        required: [ true, 'City name is required' ]

    },
    activitiesToComplete: [ ActivitySchema ]

}, {
    timestamps: {}

})

const UserSchema = new Schema (
{
username: {
    type: String,
    required: true [ 'Username is required!' ] 
},
    name:  {
    type: String,
    required: [ true, 'Name is required!' ] 
    },

    photo_url: {
    type: String,
        default:'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'

},
cities: [ CitySchema ]
},
{
timestamps: {},
usePushEach: true

}

)
module.exports = {
    UserSchema,
    CitySchema,
    ActivitySchema
}