const router = require('express').Router();

// /admin/dashboard
router.get('/', (req, res) => {
    res.render('dashboard');
})

module.exports = router;