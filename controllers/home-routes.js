const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Handle the GET request to pull up your workout on the homepage
  // res.send('Welcome to workout progress!');
  const message = 'Welcome to workout progress!'
  res.render( 'home', {
    layout: 'main',
    message,
  });
});

module.exports = router;