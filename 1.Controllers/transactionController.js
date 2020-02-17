const db = require('../database')
const moment = require('moment')

module.exports = {
    postToTransaction: (req, res) => {
        console.log(req);
        
        console.log(req.file);

        db.query(`insert into transaction (transactionID, userID, totalHarga, date, status, bukti) values (
            0, ${req.body.userID}, ${req.body.totalHarga}, '${moment().format('YYYY-MM-DD HH:mm:ss')}', 0, '${req.file.filename}')`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    deleteTransaction: (req, res) => {
        db.query(`delete from transaction where transactionID = ${req.body.transactionID}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getTranscantion: (req, res) => {
        db.query(`select * from transaction`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    statusChanger: (req, res) => {
        db.query(`update transaction set status =  1 where userID = ${req.body.userID}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    postToTransactionDetails: (req, res) => {
        db.query(`insert into transaction_details values (0, ${req.body.transactionID}, '${req.body.namaProduk}', ${req.body.jumlah}, ${req.body.harga})`, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    }
}