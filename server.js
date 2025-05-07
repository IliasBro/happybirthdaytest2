// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Statische Dateien aus dem aktuellen Ordner liefern
app.use(express.static(path.join(__dirname))); // Falls index.html im Root-Verzeichnis liegt

// Standardroute für die index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Pfad zur index.html im Root-Verzeichnis
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
