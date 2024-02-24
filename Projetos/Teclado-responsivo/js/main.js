

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
        
    }
});