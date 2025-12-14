const express = require('express');
const app = express();
const PORT = 3000;

function validarParametros(a, b) {
  return !isNaN(a) && !isNaN(b);
}

app.get('/math/soma', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!validarParametros(a, b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  res.json({ resultado: a + b });
});

app.get('/math/subtracao', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!validarParametros(a, b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  res.json({ resultado: a - b });
});

app.get('/math/multiplicacao', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!validarParametros(a, b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  res.json({ resultado: a * b });
});

app.get('/math/divisao', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!validarParametros(a, b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos' });
  }

  if (b === 0) {
    return res.status(400).json({ erro: 'Divisão por zero não permitida' });
  }

  res.json({ resultado: a / b });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
