const router = require('express').Router();

// /admin/tables
router.get('/', (req, res) => {
    res.render('tables');
})

module.exports = router;