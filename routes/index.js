const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');
const adminRoutes = require('./admin');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;