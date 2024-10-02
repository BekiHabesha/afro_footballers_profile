const Club = require('../models/Club');

const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find(req.query);
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClub = async (req, res) => {
  const newClub = new Club(req.body);
  try {
    const savedClub = await newClub.save();
    res.status(201).json(savedClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getClubs, createClub };
