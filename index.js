var express = require('express')
var app = express()

var routes = require('./routes')
var port = 8080 || process.env.PORT

app.listen(port, function(err) {
    console.log("Ouvindo na porta: " + port)
    routes.initializeRoutes(app)
})