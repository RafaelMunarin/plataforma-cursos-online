const request = require('supertest');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/cursos_disponiveis', (req, res) => {
  fs.readFile('./data/cursos.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler os dados.');
    res.json(JSON.parse(data));
  });
});

describe('GET /cursos_disponiveis', () => {
  it('deve retornar uma lista de cursos', async () => {
    const response = await request(app).get('/cursos_disponiveis');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(10);
  });
});
