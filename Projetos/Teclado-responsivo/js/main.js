

document.addEventListener("DOMContentLoaded", function() {
    let colors =[
            // Vermelho
            '#f12c06',
            // Amarelo
            '#faed34',
            // Laranja
            '#ff7f00',
            // Vermelho Laranja
            '#ff4500',
            // Tomate
            '#ff6347',
            // Laranja Escuro
            '#ff8c00',
            // Vermelho Bombeiro
            '#ff3b3f',
            // Rosa Profundo
            '#ff1493',
            // Rosa Quente
            '#ff69b4',
            // Magenta
            '#ff00ff',
            // Violeta Azulado
            '#8a2be2',
            // Índigo
            '#4b0082',
            // Lima
            '#00ff00',
            // Verde Lima
            '#32cd32',
            // Ciano
            '#00ffff',
            // Verde Mar
            '#20b2aa',
            // Azul
            '#0000ff',
            // Azul Médio
            '#0000cd',
            // Roxo
            '#800080'
        ];

    let keys = document.getElementsByClassName('key');
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        let randomColor = Math.floor(Math.random() * colors.length);
        element.style.boxShadow = '0px 0px 8px ' + colors[randomColor]+', '+ '0px 0px 3px #fff';
        element.innerHTML=element.innerHTML.toString().toLowerCase()
        if (element.innerHTML.substring(0,1) != '<') {

            element.onclick = function() {
                document.getElementById("text-input").value += element.innerHTML
            };
        }
    }
});

let capsLock = false;

function caps(){
    let keys = document.getElementsByClassName('key');
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        if (element.innerHTML.substring(0,1) != '<') {
            if(capsLock)
                element.innerHTML=element.innerHTML.toString().toLowerCase()
            else
                element.innerHTML=element.innerHTML.toString().toUpperCase()
        }    
    }
    if (capsLock)
        document.getElementById('circle').style.backgroundColor = 'crimson'
    else
        document.getElementById('circle').style.backgroundColor = 'green'
    capsLock = !capsLock
}

function back(){
    text = document.getElementById("text-input").value
    tamanho = text.length
    document.getElementById("text-input").value = text.substring(0,tamanho-1)

}
function space(){
    document.getElementById("text-input").value+=' '
}
function enter(){
    alert('a mensegem é: '+document.getElementById('text-input').value)
}



