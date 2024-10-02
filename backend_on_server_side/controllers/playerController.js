const Player = require('../models/Player');

// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find(req.query);
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new player
const createPlayer = async (req, res) => {
  const newPlayer = new Player(req.body);
  try {
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPlayers, createPlayer };
