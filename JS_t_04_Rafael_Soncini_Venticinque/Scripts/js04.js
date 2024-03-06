let bot = document.getElementById('btn1');
bot.addEventListener("click", ascdt);
let resp = document.getElementById('resp');

function ascdt(){
    let input1 = document.getElementById('nomes').value;
    let str = input1.toString();
    let mai = str.toUpperCase();
    let vet = mai.split(",");
    cres = vet.sort();
    console.log(vet);
    for (let i = 0; i < vet.length; i++) {
        resp.innerHTML += (`<br> ${vet[i]} </br>`);        
    }
}


