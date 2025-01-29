const Item = require('../models/Item');

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

exports.createItem = async (req, res) => {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
};