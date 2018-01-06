const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

router.get('/new', (request, response) => {
const userId = request.params.userId
const cityId = request.params.cityId

User.findById(userId)
.then((user) => {
const city = user.cities.id(cityId)

            response.render('activities/new', {
                userId,
                city,
                pageTitle: 'New_Activity'
            })
        })
})

router.post('/', (request, response) => {
    const userId = request.params.userId
    const storeId = request.params.cityId

    const newActivity = request.body

    User.findById(userId)
        .then((user) => {
            const city = user.cities.id(cityId)
            city.activitiesToComplete.push(newActivity)

            return user.save()
        })
        .then(() => {
            response.redirect(`/users/${userId}/cities/${cityId}`)
        })
})

















module.exports = router