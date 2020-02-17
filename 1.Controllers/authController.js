const db = require('../database')
// const nodemailer = require('nodemailer')
// const fs = require('fs')

module.exports = {
    login: (req, res) => {
        db.query(`select * from users where username = '${req.query.username}'`, (err, result) => {
            // console.log(req.query)
            if (err) throw err
            // console.log(result);

            if (result.length > 0) {
                if (req.query.password === result[0].password) {
                    res.send({
                        status: '200',
                        result: result
                    })
                    console.log(result);
                    
                } else {
                    res.send({
                        status: '401',
                        message: 'Wrong Password!'
                    })
                }
            } else {
                res.send({
                    status: '404',
                    message: 'User not found!'
                })
            }
        })
    },

    register: (req, res) => {
        let sql = `select * from users where username = '${req.body.username}' or email = '${req.body.email}'`
        let sql2 = `insert into users values (
            0, '${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.sex}', 0, 'free',
            ${req.body.nomorHandphone}, '${req.body.alamat}', '${req.body.kota}', ${req.body.kodePos})`
            
        db.query(sql, (err, result) => {

            if (err) throw err
            // console.log(result2);
            
            if (result.length > 0) {
                res.send({
                    message: 'Username has been taken!',
                    status: '400',
                })
            } else {
                db.query(sql2, (err2, result2) => {
                    if (err2) throw err2
                    // let mailOptions = {
                    //     from: 'Bakmi Bun',
                    //     to: req.body.email,
                    //     subject: 'Verify your account',
                    //     html: `<p> <a href="http://localhost:9000/auth/verify?username=${req.body.username}&email=${req.body.email}">Click here</a> 
                    //     to verify your account </p>`
                    // }

                    // transporter.sendMail(mailOptions, (err3, info) => {
                    //     if (err3) throw err3
                    // })
                    res.send({
                        status: '201',
                        message: 'Your account has been created, please check your email to verify your account!'
                    })
                })
            }
        })
    },
}