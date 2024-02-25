const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const tiedot = require('./tiedot.JSON');
const hinnat = require('./hinnat.JSON');


app.get('/api/tiedot', (req, res) => {
    res.json(tiedot);
});

app.get('/api/hinnat', (req, res) => {
    res.json(hinnat);
});

const polku = path.join(__dirname, '/public');
app.use(express.static(polku));

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });