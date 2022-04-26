const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const profileRoutes = require('./profile-routes');
const friendRoutes = require('./friend-routes');
// const thoughtRoutes = require('./thought-routes');
// const friendRoutes = require('./friend-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/profile', profileRoutes);
router.use('/friends', friendRoutes);
// router.use('/thoughts', thoughtRoutes);
// router.use('/friends', friendRoutes);

module.exports = router;