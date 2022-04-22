const router = require('express').Router();

// /auth/register
router.get('/', (req, res) => {
    res.render('register');
})

module.exports = router;