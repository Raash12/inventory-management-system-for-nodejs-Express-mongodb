# Inventory Management System

## Overview
The Inventory Management System is a web application designed to manage products, sales, users, and items effectively. It uses a modern stack with React.js for the front end, Tailwind CSS for styling, Node.js and Express for the back end, and MongoDB for data storage.

## Key Features
- **User Authentication**: Secure login and registration for users.
- **Product Management**: CRUD operations for products.
- **Sales Tracking**: Record and manage sales transactions.
- **Item Management**: Manage inventory items linked to products.
- **Responsive Design**: Utilizes Tailwind CSS for a modern look and feel.
- 
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/inventory-management-system.git
   cd inventory-management-system

    Set up the Server:
    bash

cd server
npm install

Create a .env file in the server directory with your MongoDB URI and other environment variables.

Set up the Client:
bash

cd ../client
npm install

Run the Application:

    Start the server:
    bash

cd server
npm start

Start the client:
bash

        cd ../client
        npm start

API Endpoints
User Routes (/api/users)

    POST /register: Register a new user.
    POST /login: Log in an existing user and receive a JWT token.

Product Routes (/api/products)

    GET /: Retrieve all products.
    POST /: Create a new product.
    GET /:id: Retrieve a specific product by ID.
    PUT /:id: Update an existing product.
    DELETE /:id: Delete a product.

Sale Routes (/api/sales)

    GET /: Retrieve all sales records.
    POST /: Record a new sale.
    GET /:id: Retrieve a specific sale by ID.
    PUT /:id: Update an existing sale.
    DELETE /:id: Delete a sale.

Item Routes (/api/items)

    GET /: Retrieve all items.
    POST /: Create a new item.
    GET /:id: Retrieve a specific item by ID.
    PUT /:id: Update an existing item.
    DELETE /:id: Delete an item.

Conditions

    Data Validation: Ensure data validation is implemented for all inputs to prevent invalid data.
    Authentication: Use JWT for protecting routes that require authentication.
    Role-Based Access Control: Implement different roles (e.g., admin, user) with varying levels of access.
    Error Handling: Handle errors gracefully and return meaningful messages to the client.

Challenges Faced

    Implementing authentication and ensuring secure password storage.
    Managing state effectively in the React front end.
    Structuring API routes to maintain clarity and organization.
