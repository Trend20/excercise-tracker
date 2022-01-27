const router = require('express').Router();
// import the user from the model
const Exercise = require('../models/exercise.model');

// user routes
router.route('/').get((req, res) =>{
  Exercise.find()
      .then(exercises =>res.json(exercises))
      .catch(error => res.status(400).json('Error: ' + error));
})

// add user
router.route('/add').post((req, res) =>{
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);  


  const newExercise = new Exercise({username, description, duration, date});

  newExercise.save()
         .then(() => res.json('Exercise added'))
         .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;