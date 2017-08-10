var EtherPortClient = require("etherport-client").EtherPortClient;
var five = require('johnny-five');
var LED;
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.137.71", //IP do nodeMCU   
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});

board.on("ready", function() {
    console.log("READY!");
    LED = new five.Led(4);
});

module.exports = {
    turnLEDON: function() {
        LED.on()
    },
    turnLEDOFF: function() {
        LED.off()
    }
}

//Recebe o comando do routes e enviar para a o módulo