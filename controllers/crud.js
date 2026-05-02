const pool = require('../database/db');

exports.save = async (req, res)=>{
    try {
        const user = req.body.user;
        const rol = req.body.rol;

        await pool.query(
            'INSERT INTO users (username, rol) VALUES ($1, $2)',
            [user, rol]
        );

        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.send('Error al guardar');
    }
};

exports.update = async (req, res)=>{
    try {
        const id = req.body.id;
        const user = req.body.user;
        const rol = req.body.rol;

        await pool.query(
            'UPDATE users SET username = $1, rol = $2 WHERE id = $3',
            [user, rol, id]
        );

        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.send('Error al actualizar');
    }
};