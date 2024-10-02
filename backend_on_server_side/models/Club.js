const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: String,
  foundedDate: Date,
  clubAge: Number,
  clubCity: String,
  clubCountry: String,
  nationalTeamPlayersNumber: Number,
  squadSizeNumber: Number,
  foreignPlayersNumber: Number,
  localPlayersNumber: Number,
  u20PlayersNumber: Number,
  leagueLevel: String,
  leaguePoint: Number,
  leagueTableRank: Number,
  marketValue: Number,
  cupWinningNumber: Number,
  ethiopianPremierLeagueCupWinningNumber: Number,
  ethiopianClubsCupWinningNumber: Number,
  cafChampionsLeagueCupWinningNumber: Number,
  cafConfederationsCupWinningNumber: Number,
  clubsWomenTeam: Boolean,
  clubsU20Team: Boolean,
  clubsU17Team: Boolean,
});

module.exports = mongoose.model('Club', clubSchema);
