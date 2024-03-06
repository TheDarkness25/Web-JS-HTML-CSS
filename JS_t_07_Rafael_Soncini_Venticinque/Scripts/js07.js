function relogio() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    if(horas < 10){
        horas = "0" + horas;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos;
    }
    let horario = horas + ":" + minutos + ":" + segundos;
    let rel = document.getElementById("rel");
    rel.innerHTML = (horario);
}

let periodo = setInterval(relogio, 1000);