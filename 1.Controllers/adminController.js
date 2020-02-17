const db = require('../database')

module.exports = {
    getUsers: (req, res) => {
        db.query(`select * from users`, (err, result) => {
            if (err) throw err
            res.send(result)
            // console.log(result);
        })
    },

    deleteUsers: (req, res) => {
        db.query(`delete from users where id = ${req.body.idUsers}`, (err, result) => {
            if (err) throw err

            if (req.body.idUsers == 1) {
                res.send({
                    message: 'Anda tidak dapat menghapus admin',
                    result: result
                })
            } else {
                res.send({
                    message: 'Berhasil menghapus user',
                    result: result
                })
            }

        })
    },

    searchUsers: (req, res) => {
        db.query(`select * from users where username = '${req.query.userName}'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
}