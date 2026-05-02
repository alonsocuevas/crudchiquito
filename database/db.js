require('dotenv').config();
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexión: '+error);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = conexion;