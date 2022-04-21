const router = require('express').Router();
const {
    getAllThoughts,
    // getThoughtById,
    createThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;