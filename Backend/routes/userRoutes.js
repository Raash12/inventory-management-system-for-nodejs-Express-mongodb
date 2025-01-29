const express = require('express');
const { registerUser, loginUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser); // This should be defined correctly

module.exports = router; // Only export once