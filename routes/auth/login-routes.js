const router = require('express').Router();

// /auth/login
router.get('/', (req, res) => {
    res.render('login');
})

module.exports = router;