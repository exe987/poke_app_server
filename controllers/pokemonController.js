const axios = require('axios');

//GET POKEMON BY ID
exports.getPokemonById = async (req, res) => {
  try {
    const { id } = await req.params;
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((data) => {
        let response = data.data;
        let pokemon = {
          ability: response.abilities[0].ability.name,
          height: response.height,
          weight: response.weight,
          name: response.name,
          id: response.id,
          type: response.types[0].type.name,
        };
        res.status(200).send(pokemon);
      })
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

//GET POKEMON BY NAME
exports.getPokemonByName = async (req, res) => {
  try {
    const { name } = await req.body;
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => {
        let response = data.data;
        let pokemon = {
          ability: response.abilities[0].ability.name,
          height: response.height,
          weight: response.weight,
          name: response.name,
          id: response.id,
          type: response.types[0].type.name,
        };
        res.status(200).send(pokemon);
      })
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
