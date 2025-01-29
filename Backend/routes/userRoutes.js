const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import User model
const { registerUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Log in a user
router.post('/login', loginUser);

// Update user information
router.put('/:id', updateUser); // Update user by ID

// Delete user
router.delete('/:id', deleteUser); // Delete user by ID

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export the router
module.exports = router;