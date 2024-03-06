selec.addEventListener("change", vai);
let resp = document.getElementById('resp');

function vai() {
    let opt = selec.value;
    switch (opt) {
        case '1': window.location = url = "https://pixabay.com/pt/"  
            break;
        case '2': window.location = url = "https://www.flaticon.com/br/"
            break;
        case '3': window.location = url = "https://www.figma.com/"
        default: resp.innerHTML = (`Selecione uma opção válida!`)
            break;
    }
}


