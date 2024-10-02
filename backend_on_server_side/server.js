const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const playerRoutes = require('./routes/playerRoutes');
const coachRoutes = require('./routes/coachRoutes');
const clubRoutes = require('./routes/clubRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/players', playerRoutes);
app.use('/api/coaches', coachRoutes);
app.use('/api/clubs', clubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
