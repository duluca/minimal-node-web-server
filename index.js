'use strict'

var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var compression = require('compression')
var path = require('path')
var enforce = require('express-sslify')

var environmentDetector = require('./environmentDetector')
var enforcer = require('./enforceHttps')

var app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

var enforceHttps = process.env.ENFORCE_HTTPS ||
                   process.env.ENFORCE_HTTPS_PROTO ||
                   process.env.ENFORCE_HTTPS_AZURE ||
                   process.env.ENFORCE_HTTPS_X_FORWARDED_HOST ||
                   false

var redirectToHttps = redirectToHttps
    && environmentDetector.isProdEnvironment(process.env.NODE_ENV, process.env.ENVIRONMENTS)

if(redirectToHttps) {
  console.log('Enforcing HTTPS... ')
  enforcer.enforce(app, enforce.HTTPS,
                        process.env.ENFORCE_HTTPS_PROTO,
                        process.env.ENFORCE_HTTPS_AZURE,
                        process.env.ENFORCE_HTTPS_X_FORWARDED_HOST)
}

app.use('/', express.static(path.join(__dirname, 'public')))

var server = http.createServer(app)

var port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Server listening internaly on port ' + port)
  console.log('Note: The port you mapped to ' + port + ' may differ when accessing from the outside.')
})
