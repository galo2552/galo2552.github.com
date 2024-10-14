const cors = require('cors');
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Configuración de CORS (permite conexiones desde otros dominios)
app.use(cors());
app.use(bodyParser.json());

// Rutas del backend
app.post('/ia', (req, res) => {
    const { name, description, label, link } = req.body;
    
    console.log('Datos recibidos:', req.body);  // Log de los datos enviados

    const query = `INSERT INTO iaList (name, description, label, link) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, description, label, link], function (err) {
        if (err) {
            console.error('Error al insertar en la base de datos:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});



app.get('/ia', (req, res) => {
    db.all('SELECT * FROM iaList', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Iniciar servidor
app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:5000`);
});

