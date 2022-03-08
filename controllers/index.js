const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const lyricsRoutes = require('./lyric-routes.js');
const notepadRoutes = require('./notepad-Routes.js')


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/lyrics', lyricsRoutes);
router.use('/notes',notepadRoutes);

module.exports = router;