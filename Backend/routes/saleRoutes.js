const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Adjust this path to your model

// Create a new item
router.post('/', async (req, res) => {
    const { name, price, quantity } = req.body;
    const item = new Item({ name, price, quantity });
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Export the router
module.exports = router;