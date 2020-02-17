const db = require('../database')

module.exports = {
    postToCarts: (req, res) => {
        // console.log(req.body);
        // console.log(req.query);
        // console.log(req.params);
        db.query(`insert into carts (cartID, productID, userID, jumlah) values (
            0, ${req.body.productID}, ${req.body.userID}, ${req.body.jumlah} )`,
            (err, result) => {
                if (err) throw err
                res.send(result)

            })
    },

    getCarts: (req, res) => {
        // console.log(req.query);
        // console.log(req.params);
        // console.log(req.body);
        db.query(`select * from carts as c join products as p on c.productID = p.productID where c.userID = ${req.query.userID}`, (err, result) => {
            if (err) throw err
            res.send(result)
            // console.log(result);
            //  console.log(err);
            // console.log(req.body);

            // console.log(req.params);


        })
    },

    deleteItems: (req, res) => {
        // console.log(req.body);
        // console.log(req.query);
        // console.log(req.params);

        db.query(`delete from carts where cartID = ${req.body.cartID}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    deleteCarts: (req, res) => {
        db.query(`delete from carts where userID = ${req.body.userID}`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },

    updateJumlah: (req, res) => {
        db.query(`update carts set jumlah = '${req.body.jumlah}' where productID = '${req.body.productID}'`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

}