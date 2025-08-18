const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/servicos', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicos.html'));
});

app.get('/energia-solar', (req, res) => {
  res.sendFile(path.join(__dirname, 'energia-solar.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
