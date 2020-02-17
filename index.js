var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
// const fs = require('fs')

const port = 5000
const { 
    authRouter,
    adminRouter,
    productRouter,
    cartRouter,
    transactionRouter
 } = require('./2.Routers')

app.use(bodyParser.json())
app.use(cors())
app.use('/product', express.static('uploads'))
app.use('/bukti', express.static('upload-bukti'))

app.get('/', (req, res) => {
    res.send('Success')
})

app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/menu', productRouter)
app.use('/cart', cartRouter)
app.use('/transaction', transactionRouter)

app.listen(port, console.log('Server running in port : ' + port))