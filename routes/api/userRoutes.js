const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userControllers');

// GET all users
router.get('/', getUsers);

// GET a single user by its _id and populated thought and friend data
router.get('/:userId', getSingleUser);

// POST a new user
router.post('/', createUser);

// PUT to update a user by its _id
router.put('/:userId', updateUser);

// DELETE to remove user by its _id
router.delete('/:userId', deleteUser);


module.exports = router;
