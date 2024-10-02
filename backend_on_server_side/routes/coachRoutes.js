const express = require('express');
const { getCoaches, createCoach } = require('../controllers/coachController');
const router = express.Router();

router.get('/', getCoaches);
router.post('/', createCoach);

module.exports = router;
