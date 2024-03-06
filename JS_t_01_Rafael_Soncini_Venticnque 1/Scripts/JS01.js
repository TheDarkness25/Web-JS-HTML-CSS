let hoje = new Date();
let aniversario = new Date("feb 4 2022");
let MeuNiver = (aniversario - hoje)/1000/60/60/24;
MeuNiver = MeuNiver.toFixed(0);
let niver = document.getElementById('niver');
niver.innerHTML = ("O meu aniversário será em " + MeuNiver + " dias.");

let feriado = new Date("oct 12 2021");
let ProxFeriado = (feriado - hoje)/1000/60/60/24;
ProxFeriado = ProxFeriado.toFixed(0);
let feriado1 = document.getElementById('feriado');
feriado1.innerHTML = ("O próximo feriado será em " + ProxFeriado + " dias.");


  

