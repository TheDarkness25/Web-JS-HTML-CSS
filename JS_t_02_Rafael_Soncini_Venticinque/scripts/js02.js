function CalculoImc() {
    var peso = parseFloat(document.formImc.peso.value);
    var altura = parseFloat(document.formImc.altura.value);
    var imc = peso / (altura * altura);
    imc = imc.toFixed(1);
    switch(true){
        case imc <= 18.5: document.formImc.resultado.value = imc + " (abaixo do peso)";
            break;
        case imc >= 18.6 && imc <= 24.9: document.formImc.resultado.value = imc + " (Peso ideal (parabéns)";
            break;
        case imc >= 25.0 && imc <= 29.9: document.formImc.resultado.value = imc + " (Levemente acima do peso)";
            break;
        case imc >= 30.0 && imc <= 34.9: document.formImc.resultado.value = imc + " (Obesidade grau I)"; 
            break;
        case imc >= 35.0 && imc <= 39.9: document.formImc.resultado.value = imc + " (Obesidade grau II (severa))"; 
            break;
        default: document.formImc.resultado.value = imc + " (Obesidade grau III (mórbida))";
    }
}
