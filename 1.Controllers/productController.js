const db = require('../database')

module.exports = {
    getProducts: (req, res) => {
        db.query(`select * from products`, (err, result) => {
            if (err) throw err
            res.send(result)
            // console.log(err);
            // console.log(result);

        })
    },

    deleteProducts: (req, res) => {
        db.query(`delete from products where productID = ${req.body.productID}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    postToProducts: (req, res) => {
        // console.log(req);
        console.log(req.file);

        db.query(`insert into products (productID, image, price, description, name, kategori) 
        values (0, 'product/files/${req.file.filename}', ${req.body.price}, '${req.body.description}', '${req.body.name}', '${req.body.kategori}')`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    filterProducts: (req, res) => {
        // console.log(req.query)
        let sql = `select * from products`
        let { query } = req
        if (query) {
            sql += ` where`

            if (query.inputan) {
                sql += ` name like '%${query.inputan}%'`
            }
        }
        // console.log(sql)
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);

            }
        })
    },

    getMakanan: (req, res) => {
        db.query(`select * from products where kategori = 'Makanan'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getMinuman: (req, res) => {
        db.query(`select * from products where kategori = 'Minuman'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getEs: (req, res) => {
        db.query(`select * from products where kategori = 'Es'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
}