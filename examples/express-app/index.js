const express = require('express')
const path = require('path')
const app = express()
app.use('/', express.static(path.join(__dirname, 'public')))


const testdata = 35;
app.listen(8888)

