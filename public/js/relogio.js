$(document).ready(function() {
    digital(Number($("#horaServidor").text()))
    moment.locale("pt-br")
})

function digital(horaServidor) {
    var offset = moment() - horaServidor
    setInterval(function() {
        $("#relogio").text(moment(moment() - offset).format("LTS"))
        $("#data").text(moment(moment() - offset).format("dddd[,] D [de] MMMM [de] YYYY"))
    }, 1000)
}