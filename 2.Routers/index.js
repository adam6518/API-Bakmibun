const authRouter = require('./authRouter')
const adminRouter = require('./adminRouter')
const productRouter = require('./productRouter')
const cartRouter = require('./cartRouter')
const transactionRouter = require('./transactionRouter')

module.exports = {
    authRouter,
    adminRouter,
    productRouter,
    cartRouter,
    transactionRouter
}