var express = require('express');
var router = express.Router();
const User = require('../db/models/User')

router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.render('users/index', {
        users,
        pageTitle: 'Travel'
      })

    })

    .catch((error) => {
      console.log(error)
    })
})
//new
router.get('/new', (request, response) => {
  response.render('users/new', { pageTitle: 'New User' })
})

//create
router.post('/', (request, response) => {
  const newUser = request.body
  if (!newUser.photo_url) {
    newUser.photo_url = 'https://i.imgur.com/xln20Nb.jpg?1'

  }

  User.create(newUser)
    .then(() => {
      response.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})
//show
router.get('/:userId', (request, response) => {
 const userId = request.params.userId
User.findById(userId)
.then((user) => {
response.render('users/show', {
  user,
  pageTitle: user.username
})

})
.catch((error) => {
  console.log(error)

})
})

// //edit
// router.get('/:userId/edit', (request, response) => {
// const userId = request.params.userId
// User.findById(userId)
// .then((user) => {
//   response.render('users/edit', {
//     user,
//     pageTitle: 'Profile_Update'
//   })
// })
// .catch((error) => {
// console.log
// })

// })
// //delete
// router.get('/:userId/delete', (request, response) => { 
// const userId = request.params.userId
// User.findByIdAndRemove(userId)
// .then (() => {
//   response.redirect('/users')
// })
// .catch((error) => {
// console.log(error)
// })

// })

// //update
// router.put('/userId', (request, response) => {
// const userId = request.params.userId
// const updatedUserInfo = request.body

// User.findByIdAndUpdate(userId, updatedUserInfo, {new: true})
// .then (() => {
// response.redirect(`/users/$[userId]`)
// })
// })

module.exports = router;