let bot = document.getElementById('btn');
bot.addEventListener("click", imprime);
let resp = document.getElementById("resp");

function imprime() {
    let nome = document.getElementById("nome").value;
    let mat = document.getElementById("mat").value;
    let nota = document.getElementById("nota").value;
    let objeto = {
        Nome: nome,
        Matrícula: mat,
        Nota: nota
    }
    resp.innerHTML = (`<br><b>Nome: ${objeto.Nome}</b></br> <br><b>Matrícula: ${objeto.Matrícula}</b></br>  <br><b>Nota final: ${objeto.Nota}</b></br>`)
}
