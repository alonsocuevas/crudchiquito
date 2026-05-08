const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});







Shemagh232