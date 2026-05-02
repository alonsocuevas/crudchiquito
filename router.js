const express = require('express');
const router = express.Router();

const pool = require('./database/db');

// LISTAR
router.get('/', async (req, res)=>{
    try {
        const result = await pool.query('SELECT * FROM users');
        res.render('index', { results: result.rows });
    } catch (error) {
        console.log(error);
        res.send('Error al cargar datos');
    }
});

// CREAR
router.get('/create', (req, res)=>{
    res.render('create');
});

// EDITAR
router.get('/edit/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.render('edit', { user: result.rows[0] });
    } catch (error) {
        console.log(error);
        res.send('Error al cargar registro');
    }
});

// ELIMINAR
router.get('/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.send('Error al eliminar');
    }
});

const crud = require('./controllers/crud');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;