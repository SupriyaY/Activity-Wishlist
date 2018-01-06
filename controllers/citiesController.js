const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../db/models/User')

router.get('/', (request, response) => {
    const userId = request.params.userId

    User.findById(userId)
        .then((user) => {
            response.render('cities/index', {
                userName: `${user.name}`,
                userId: user._id,
                cities: user.cities,
                pageTitle: 'Cities'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

router.get('/new', (request, response) => {
    const userId = request.params.userId

    response.render('cities/new', {
        userId,
        pageTitle: 'New_City'
    })
})

router.get('/:cityId', (request, response) => {
    const userId = request.params.userId
    const storeId = request.params.storeId

    User.findById(userId)
        .then((user) => {
            const store = user.stores.id(storeId)
            response.render('cities/show', {
                userId,
                store,
                pageTitle: 'City'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

// router.post('/', (request, response) => {
//     const userId = request.params.userId
//     const newCity = request.body

//     User.findById(userId)
//         .then((user) => {
//             user.cities.push(newCity)
//             return user.save()
//         })
//         .then(() => {
//             response.redirect(`/users/${userId}/cities`)
//         })
//         .catch((error) => {
//             console.log(error)
//         })

// })

// router.get('/:cityId/delete', (request, response) => {
//     const userId = request.params.userId
//     const storeId = request.params.storeId

//     User.findById(userId)
//         .then((user) => {
//             user.stores.id(storeId).remove()
//             return user.save()
//         })
//         .then(() => {
//             response.redirect(`/users/${userId}/cities/`)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })

module.exports = router