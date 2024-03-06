let btn1 = document.getElementById('bot1');
let btn2 = document.getElementById('bot2');
btn1.addEventListener("click", jogo);
btn2.addEventListener("click", nov);

function jogo (){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let n1 = parseInt(input1.value);
    let n2 = parseInt(input2.value);
    let n3 = parseInt(input3.value);
    let resp = document.getElementById('resposta');
    let rand = Math.random() * 10;
    rand = rand.toFixed(0);
    console.log(rand);
    input1.style.backgroundColor = "red";
    input2.style.backgroundColor = "red";
    input3.style.backgroundColor = "red";
    resp.textContent = 'Tente novamente...';
    resp.style.backgroundColor = 'red';
    if (n1 == rand){
        resp.textContent = 'Parabéns você acertou na primeira tentativa!';
        resp.style.backgroundColor = 'rgb(0, 255, 0)';
        input1.style.backgroundColor = "rgb(0, 255, 0)";
    }
    else if (n2 == rand){
        resp.textContent = 'Parabéns você acertou na segunda tentativa!';
        resp.style.backgroundColor = 'rgb(0, 255, 0)';
        input2.style.backgroundColor = "rgb(0, 255, 0)";
    }
    else if (n3 == rand){
        resp.textContent = 'Parabéns você acertou na terceira tentativa!';
        resp.style.backgroundColor = 'rgb(0, 255, 0)';
        input3.style.backgroundColor = "rgb(0, 255, 0)";
    }
    else{
        resp.textContent = 'Você errou :( tente novamente!';
    } 
}

function nov(){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let resp = document.getElementById('resposta');
    input1.style.backgroundColor = "white";
    input1.value = "none";
    input2.style.backgroundColor = "white";
    input2.value = "none";
    input3.style.backgroundColor = "white";
    input3.value = "none";
    resp.textContent = 'Digite os números novamente!';
    resp.style.backgroundColor = "rgb(0, 66, 248)"
    resp.style.color = "white";
}