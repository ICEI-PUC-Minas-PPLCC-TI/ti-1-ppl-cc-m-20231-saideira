var segundos = 0;
var minutos = 0;
var horas = 0;
var dias = 0;
var timer;

function iniciar() {
    timer = setInterval(contador, 1000);
    document.getElementById("iniciar").disabled = true;
    document.getElementById("pausar").disabled = false;
    document.getElementById("zerar").disabled = true;
}

function pausar() {
    clearInterval(timer);
    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
    document.getElementById("zerar").disabled = false;
}

function zerar() {
    clearInterval(timer);
    segundos = 0;
    minutos = 0;
    horas = 0;
    dias = 0;
    document.getElementById("contador").innerHTML = "00:00:00:00";
    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
    document.getElementById("zerar").disabled = true;
}

function contador() {
    segundos++;

    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    if (horas == 24) {
        horas = 0;
        dias++;
    }

    var s = segundos < 10 ? "0" + segundos : segundos;
    var m = minutos < 10 ? "0" + minutos : minutos;
    var h = horas < 10 ? "0" + horas : horas;
    var d = dias < 10 ? "0" + dias : dias;

    document.getElementById("contador").innerHTML = d + ":" + h + ":" + m + ":" + s;
}

