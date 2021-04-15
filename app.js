const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')
const uniqueFilename = require('unique-filename')
const os = require('os')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const randomTmpfile = uniqueFilename(os.tmpdir());
        const ext = path.extname(file.originalname)

        cb(null, Date.now() + ext) //Appending extension
    }
})
const uploader = multer({ storage, dest: 'uploads/' })

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(uploader.array('photos'))
app.use(express.json())

app.use('/api/superheroes', require('./routes/superheroes'))
app.use('/uploads', express.static('./uploads'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has ben started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()

