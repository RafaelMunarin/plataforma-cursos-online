const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'API funcionando corretamente!' });
});

app.get('/cursos_disponiveis', (req, res) => {
  fs.readFile('./data/cursos.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler os dados.');
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
