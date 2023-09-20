// API Node.js Express (server.js)
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Usuário 1' },
    { id: 2, nome: 'Usuário 2' },
    { id: 3, nome: 'Usuário 3' },
  ];
  res.json(usuarios);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
