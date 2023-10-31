const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  // Handle the POST request for adding a workout
  res.send('Adding a workout!');
});

module.exports = router;