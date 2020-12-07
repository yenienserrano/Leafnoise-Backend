require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use( cors() )
app.use( express.json() )

app.use( '/v1', require( './routes/clima'))

app.listen(process.env.PORT, () => console.log(`El servidor esta corriendo en el ${ process.env.PORT }`))

module.exports = app