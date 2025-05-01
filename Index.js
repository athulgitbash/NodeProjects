// Index.js
 
const express = require('express');
const Index = express();
const userRoutes = require('./Routes/userRoutes');
 
// Middleware to parse JSON
Index.use(express.json());
 
// Use the routes
Index.use('/api', userRoutes);
 
// Start the server
const PORT = 3000;
Index.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});