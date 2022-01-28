const router = require('express').Router();
// import the user from the model
const User = require('../models/user.model')

// user routes
router.route('/').get((req, res) =>{
  User.find()
      .then(users =>res.json(users))
      .catch(error => res.status(400).json('Error: ' + error));
})

// add user
router.route('/add').post((req, res) =>{
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
         .then(() => res.json('User added'))
         .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;