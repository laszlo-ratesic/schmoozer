const router = require('express').Router();

// /admin/profile
router.get('/', (req, res) => {
    res.render('profile');
})

module.exports = router;