const express = require('express');
const router = express.Router();

router.get('/',  async (req, res) => {
  try{
    const workoutData = await Workout.findAll();
    const workouts = workoutData.map((workout) => workouts.get({ plain: true }));
    // res.json({workouts});
    res.render('all-workouts', { workouts });
  }

  catch (err) {
    res.status(500).json(err);}
});

module.exports = router;