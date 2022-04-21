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

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/<user-id>
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// /api/users/<user-id>/friends/<friend-id>
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;