const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Ensure this path is correct

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

// Update an item by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    try {
        const item = await Item.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Additional item routes can be added here

module.exports = router;