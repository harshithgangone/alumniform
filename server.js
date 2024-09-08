// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const alumniRoutes = require('./routes/alumniRoutes');
const path = require('path'); // Import the 'path' module
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const PORT =3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/AluminiProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Serve static files from the 'public' directory


// Routes
app.use('/api/alumni', alumniRoutes);