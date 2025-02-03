const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Register a new user
const registerUser = async (req, res) => {
    const { username, password, role } = req.body;

    const existingUsers = await User.find();

    // Create a default admin user if no users exist
    if (existingUsers.length === 0) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const adminUser = new User({ username: 'admin', password: hashedPassword, role: 'admin' });
        await adminUser.save();
        return res.status(201).json({ message: 'Default admin user created' });
    }

    // Regular user registration
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role: role || 'user' });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Log in a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Update user information
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, password } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const updates = {};
        if (username) updates.username = username;
        if (password) updates.password = await bcrypt.hash(password, 10);

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Export all functions
module.exports = { registerUser, loginUser, updateUser, deleteUser };