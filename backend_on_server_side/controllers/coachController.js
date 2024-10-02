const Coach = require('../models/Coach');

const getCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find(req.query);
    res.status(200).json(coaches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCoach = async (req, res) => {
  const newCoach = new Coach(req.body);
  try {
    const savedCoach = await newCoach.save();
    res.status(201).json(savedCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCoaches, createCoach };
