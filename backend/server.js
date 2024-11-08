const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// Get list of Pokemon
app.get('/api/pokemon', async (req, res) => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    res.json(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Get Pokemon details
app.get('/api/pokemon/:name', async (req, res) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));