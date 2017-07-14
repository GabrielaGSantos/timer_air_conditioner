var pug = require('pug')

module.exports = {
    initializeRoutes: function(app) {
        app.set("view engine", "pug")
        app.get("/", function(req, res) {
            res.render("index", {
                variavel: "teste",
                teste: false
            })
        })
        app.get('*', (req, res) => {
            res.sendFile(__dirname + '/public/' + req.params[0]);
        });
    }
}