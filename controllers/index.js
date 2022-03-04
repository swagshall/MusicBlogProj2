const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const lyricRoutes = require('./lyric-routes.js');
const { route } = require('./home-routes.js');



router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/lyric', lyricRoutes);

module.exports = router;
