const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const URL = process.env.MONGODB_URL;


// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(URL)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Error connecting to database:', err))

// Routes
app.use('/api/cars', require('./routes/carRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
