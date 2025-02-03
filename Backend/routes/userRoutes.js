const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');
const adminMiddleware = require('../middleware/adminMiddleware'); // Ensure the path is correct
const User = require('../models/User'); // Import User model for fetching users

// Register a new user
router.post('/register', registerUser);

// Log in a user
router.post('/login', loginUser);

// Update user information (admin only)
router.put('/:id', adminMiddleware, updateUser);

// Delete user (admin only)
router.delete('/:id', adminMiddleware, deleteUser);

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