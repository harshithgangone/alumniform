// routes/alumniRoutes.js
const express = require('express');
const router = express.Router();
const Alumni = require('../models/alumni');

// Create a new alumni entry
router.post('/', async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    res.status(201).send(alumni);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
