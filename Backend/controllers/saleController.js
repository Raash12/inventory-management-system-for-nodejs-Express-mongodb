const Sale = require('../models/Sale');

exports.getSales = async (req, res) => {
    const sales = await Sale.find().populate('productId');
    res.json(sales);
};

exports.createSale = async (req, res) => {
    const newSale = new Sale(req.body);
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
};