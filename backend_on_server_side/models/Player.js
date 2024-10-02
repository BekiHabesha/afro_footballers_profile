const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  age: Number,
  height: Number,
  position: String,
  alternativePosition: String,
  nationality: String,
  nationalTeamCareer: String,
  currentClub: String,
  contractExpires: Date,
  contractOptionYear: Number,
  lastContractExtensionDate: Date,
  matchPlayed: Number,
  goalScored: Number,
  goalAssisted: Number,
  salary: Number,
  marketValue: Number,
  playerAgent: String,
  previousClubs: [String],
  cupWinning: Number,
  ethiopianPremierLeagueCupWinning: Number,
  ethiopianClubsCupWinning: Number,
  cafChampionsLeagueCupWinning: Number,
  cafConfederationsCupWinning: Number,
  afconCupWinning: Number,
});

module.exports = mongoose.model('Player', playerSchema);
