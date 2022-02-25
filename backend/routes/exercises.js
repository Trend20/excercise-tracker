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


// get exercise by specific id
router.route('/:id').get((req, res) =>{
  Exercise.findById(req.params.id)
          .then(exercise => res.json(exercise))
          .catch(error => res.status(400).json('Error: ' + error))
});

// delete exercise
router.route('/:id').delete((req, res) =>{
  Exercise.findByIdAndDelete(req.params.id)
          .then(res => res.json('Exercise deleted!!'))
          .catch(error => res.status(400).json('Error: ' + error))
});

// updating the exercise
router.route('/update/:id').post((req, res) =>{
  Exercise.findById(req.params.body)
          .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                    .then(() =>res.json('Exercise Updated!'))
                    .catch(error => res.status(400).json('Error: ' + error))
          })
          .catch(error => res.status(400).json('Error: ' + error))
})



module.exports = router;