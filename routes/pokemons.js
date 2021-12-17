//ROUTE FOR GET POKEMONS FOR HOME
const express = require('express');
const router = express.Router();
const pokemonsControllers = require('../controllers/pokemonsController');

router.get('/', pokemonsControllers.getPokemons);

module.exports = router;
