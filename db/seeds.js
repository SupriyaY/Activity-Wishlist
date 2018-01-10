require('dotenv').config()
const User = require('./models/User')
const City = require('./models/City')
const Activity = require('./models/Activity')
const mongoose = require('mongoose')

//Connecting to moongoose database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!
${error}
`)
    process.exit(-1)
})

//Delete a user and add a test user
User.remove({}).then(() => {
        const Supsy = new User({
            username: 'SupsY',
            name: 'Supriya Yerramilli',
            photo_url : 'https://i.imgur.com/3XCJ5EZ.png?3'

        })

        const miami = new City({
            city_name: 'Miami'

        })
        const shoreClub = new Activity({
            activity_place: "Shore Club South Beach",
            activity_name: "Brunch",
            activity_address: "1901 Collins Ave, Miami Beach, FL 33139",
            activity_description: "Boozey brunch and lounging poolside.",
            visited: true,
            recommend_to_friends: true
        })

        miami.activitiesToComplete.push(shoreClub)



        const atlanta = new City({
            city_name: 'Atlanta'
        })

        const footballGame = new Activity({
            activity_place: 'Atlanta Falcons game',
            activity_name: 'Football game',
            activity_address: '1414 Andrew Young International Blvd NW, Atlanta, GA 30313',
            activity_description: 'Football, beer, and hotdogs at Mercedes-Benz Stadium!',
            visited: yes,
            recommend_to_friends: yes
        })

        atlanta.activitiesToComplete.push(footballGame)

        Supsy.cities.push(miami, atlanta)

        return Supsy.save()

    }).then(() => {
        return User.create({
            username: 'NintiC',
            name: 'Ninti Chance',
            photo_url : 'https://i.imgur.com/IcdNK6r.png?1'

        })
    }).then((ninti) => {
            const newYork = new City({
                city_name: 'New York'
            })

            const losAngeles = new City ({
                city_name: 'Los Angeles'
            })

            ninti.cities.push(newYork, losAngeles)

return ninti.save()
        })


.then(() => {
return User.create({username: 'AlexM', 
name: 'Alex Mink', 
photo_url : 'https://i.imgur.com/cQigItX.png?1'
})
})
.then((alex) => {


const austin = new City({city_name: 'Austin'})

const chicago = new City({city_name: 'Chicago'})

alex.cities.push(austin, chicago)

return alex.save()
})


.then(() => {
    return User.create({username: 'ClimberBoy', 
    name: 'Jon Ruben', 
    photo_url : 'https://i.imgur.com/1yHRoDB.png?1'
})
}).then((jon) => {

    const bolder = new City({city_name: 'Bolder'})


    jon.cities.push(bolder)

    return jon.save()
})



                    .catch((error) => {
                        console.log('Error saving seeded data!')
                        console.log(error)
                    }).then(() => {
                        mongoose.connection.close()
                        console.log(`Finished seeding database...
    Disconnected from MongoDB
    `)
                    })