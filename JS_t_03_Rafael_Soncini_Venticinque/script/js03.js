function Calculomed() {
    var n1 = parseFloat(document.formed.nota1.value);
    var n2 = parseFloat(document.formed.nota2.value);
    var med = (n1 + n2)/2;
    med = med.toFixed(2);
    switch(true){
        case med < 6.0: document.formed.resultado.value = med + " Insuficiente";
            break;
        case med >= 6.0 && med <= 7.0: document.formed.resultado.value = med + " Regular";
            break;
        case med > 7.0 && med <= 8.5: document.formed.resultado.value = med + " Bom";
            break;
        case med > 8.5 && med <= 9.5: document.formed.resultado.value = med + " Ótimo"; 
            break;
        default: document.formed.resultado.value = med + " Excelente";
    }
}