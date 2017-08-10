var pug = require('pug')
var moment = require('moment')
var routes_post = require('./nodeMCU/routes_post')

module.exports = {
    initializeRoutes: function(app) {
        app.set("view engine", "pug")
        app.get("/", function(req, res) {
            res.render("index", {
                activated: "info",
                horaServidor: moment()
            })
        })
        app.get("/config", function(req, res) {
            res.render("config", {
                activated: "config"
            })
        })
        app.get("/ligar", function(req, res) {
            res.render("ligar", {
                activated: "ligar"
            })
        })
        app.get("/desligar", function(req, res) {
            res.render("desligar", {
                activated: "desligar"
            })
        })
        app.get("/travar", function(req, res) {
            res.render("travar", {
                activated: "travar"
            })
        })

        routes_post.setApp(app);

        app.get('*', (req, res) => {
            res.sendFile(__dirname + '/public/' + req.params[0]);
        });

    }
}