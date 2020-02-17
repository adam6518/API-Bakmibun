let multer = require('multer')

let multerStorageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload-bukti')
    },


    filename: (req, file, cb) => {
        cb(null, `Bukti-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

let filterConfig = (req, file, cb) => {
    if (file.mimetype.split('/')[1] == 'png' || file.mimetype.split('/')[1] == 'jpeg') {
        cb(null, true)
    } else {
        req.validation = { error: true, msg: 'File must be an image' }
        cb(null, false)
    }
}

let upload = multer({
    storage: multerStorageConfig,
    fileFilter: filterConfig
})

module.exports = upload