//ROUTES FOR GET POKEMON DETAIL
const express = require('express');
const router = express.Router();
const pokemonControllers = require('../controllers/pokemonController');

router.get('/:id', pokemonControllers.getPokemonById);

router.post('/', pokemonControllers.getPokemonByName);

module.exports = router;
