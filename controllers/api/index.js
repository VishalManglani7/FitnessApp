const router = require('express').Router();
const updateRoutes = require('./update-routes'); //add a workout
const userRoutes = require('./user-routes.js');

router.use('/user', userRoutes);
router.use('/add', updateRoutes);



module.exports = router;