const express = require('express');
const connectDB = require('./config/db'); // Ensure this config file exists for database connection
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); // Import user routes
const productRoutes = require('./routes/productRoutes'); // Ensure this file exists
const itemRoutes = require('./routes/itemRoutes'); // Ensure this file exists

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/items', itemRoutes); // Use item routes

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});