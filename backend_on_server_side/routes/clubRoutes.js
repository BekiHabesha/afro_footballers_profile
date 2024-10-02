const express = require('express');
const { getClubs, createClub } = require('../controllers/clubController');
const router = express.Router();

router.get('/', getClubs);
router.post('/', createClub);

module.exports = router;
