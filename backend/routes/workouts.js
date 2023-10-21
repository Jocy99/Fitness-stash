const express = require('express');
// this variable creates the router
const router = express.Router();
const Workout = require('../models/workoutModel');
const {
    getWorkout,
    getWorkouts,
    createWorkout
} = require('../controllers/workoutControllers')

// communicate with database to interact/change data
// get all workouts
router.get('/', getWorkouts);

// get a single workout
router.get('/:id', getWorkout);

// post a new workout
router.post('/', createWorkout);

// delete a workout
router.delete('/:id', (req, res)=>{
    res.json({message:'delete a workout'})
});

// update a workout
router.patch('/:id', (req, res)=>{
    res.json({message:'update a workout'})
});
module.exports = router;