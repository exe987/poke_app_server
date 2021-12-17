const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

//ROUTES
app.use('/api/pokemons', require('./routes/pokemons'));
app.use('/api/pokemon', require('./routes/pokemon'));

app.get('/', (req, res) => {
  res.send('HOME');
});

app.listen(PORT, () => {
  console.log(`Server on port N° ${PORT}`);
});
