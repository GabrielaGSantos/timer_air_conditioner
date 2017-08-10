var wifiConnection = require('./wifiConection')

module.exports = {
    setApp: function(app) {

        app.get("/on", function(req, res) {
            wifiConnection.turnLEDON();
            res.send('LIGAR');
        })


        app.get("/off", function(req, res) {
            wifiConnection.turnLEDOFF();
            res.send('DESLIGAR');
        });
    }
}


//Recebe da página web o comando e envia para o wifiConection