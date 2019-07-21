// create simple express server in server/src/app.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

//.............. ROUTES ................
app.get('/status', (req, res) => {
    console.log('Hey!!!')
    res.send({
        message: "Hello world!"
    })
})

app.listen(process.env.PORT || 5000)