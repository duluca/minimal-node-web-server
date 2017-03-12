/**
 * Created by doguhanuluca on 3/18/16.
 */
'use strict'

var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var compression = require('compression')
var path = require('path')

var app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/', express.static(path.join(__dirname, 'public')))

var server = http.createServer(app)

var port = process.env.PORT

server.listen(port, function () {
  console.log('Server listening internaly on port ' + port)
  console.log('Note: The port you mapped to ' + port + ' may differ when accessing from the outside.')
})
