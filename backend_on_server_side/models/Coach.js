const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  age: Number,
  height: Number,
  position: String,
  nationality: String,
  nationalTeamCareer: String,
  coachingLicenseLevel: String,
  coachingExperienceYear: Number,
  currentClub: String,
  currentClubJoinedDate: Date,
  contractExpires: Date,
  contractOptionDate: Date,
  lastContractExtensionDate: Date,
  matchCoached: Number,
  matchWinning: Number,
  matchLoss: Number,
  matchDraw: Number,
  salary: Number,
  marketValue: Number,
  previousClubs: [String],
  cupWinning: Number,
  ethiopianPremierLeagueCupWinning: Number,
  ethiopianClubsCupWinning: Number,
  cafChampionsLeagueCupWinning: Number,
  cafConfederationsCupWinning: Number,
  afconCupWinning: Number,
});

module.exports = mongoose.model('Coach', coachSchema);
