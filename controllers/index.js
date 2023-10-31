const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes'); //see progress
const updateRoutes = require('./update-routes'); //add a workout

router.use('/', homeRoutes);
router.use('/add', updateRoutes);
router.use('/api', apiRoutes);

module.exports = router;

