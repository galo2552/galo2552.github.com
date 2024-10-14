const sqlite3 = require('sqlite3').verbose();

   // Crear una nueva instancia de la base de datos
   const db = new sqlite3.Database('./iaList.db', (err) => {
       if (err) {
           console.error('Error al conectar con SQLite:', err.message);
       } else {
           console.log('Conectado a la base de datos SQLite');
           
           // Crear la tabla iaList si no existe
           db.run(`CREATE TABLE IF NOT EXISTS iaList (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT NOT NULL,
               description TEXT,
               label TEXT,
               link TEXT
           )`, (err) => {
               if (err) {
                   console.error('Error al crear la tabla:', err.message);
               } else {
                   console.log('Tabla iaList creada o ya existente');
               }
           });
       }
   });

   // Exportar la instancia de la base de datos para usarla en otros archivos
   module.exports = db;