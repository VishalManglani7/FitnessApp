const express = require('express');
const router = express.Router();
const {Workout, User} = require('../models/');

router.post('/add', async (req, res) => {
  try{
  const { date, workoutmins, workouttype } = req.body;
  const newWorkout = await Workout.create({
    date: date,
    workout_minutes: workoutmins,
    workout_type: workouttype});
  // Handle the POST request for adding a workout
  res.json('Adding a workout!');
  }

catch (error) {
  console.error('Error adding workout:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}});

module.exports = router;
