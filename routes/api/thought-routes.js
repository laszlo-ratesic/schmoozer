const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById);

module.exports = router;