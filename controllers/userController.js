var express = require('express');
var router = express.Router();
const User = require('../db/models/User')

router.get('/', (request, response) => {
User.find ({})
.then((users) => {
response.render('user/index', {
users,
pageTitle: 'Travel'
})

})

.catch((error) => {
  console.log(error)

})

})






module.exports = router;
