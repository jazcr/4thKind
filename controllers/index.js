const router = require('express').Router();
//const apiRoutes = require('./api');
const homepageRoute = require('./home-routes');
const dashboardRoute = require('./dashboard-routes');

//Path for the api routes
//router.use('/api', apiRoutes);

//Path for the homepage
router.use('/', homepageRoute);

//Path for the dashboard
//router.use('/dashboard', dashboardRoute);

module.exports = router;
