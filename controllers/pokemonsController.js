const axios = require('axios');

//GET POKEMONS FOR HOME
exports.getPokemons = async (req, res) => {
  try {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then((data) => res.status(200).send(data.data))
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(500).send('Server Error Pokemons');
  }
};
