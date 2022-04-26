const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    addFriend,
    removeFriend,
    deleteUserById
} = require('../../controllers/user-controller');

// /admin/friends
router.get('/', (req, res) => {
    res.render('friends');
})

module.exports = router;