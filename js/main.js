const projects = [
    {
        title: 'Projeto 1',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'clique e veja',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 2',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'nada de mais',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 3',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'veja e clique',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 4',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'veja e clique',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 5',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'clique e veja',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 6',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'nada de mais',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 7',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'veja e clique',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 8',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'veja e clique',
         link:'www.google.com' 
    },
    {
        title: 'Projeto 9',
        description:`Sed ut perspiciatis unde omnis iste
         natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
         quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
         magni dolores eos qui ratione voluptatem sequi nesciunt.`,
         textLink:'veja e clique',
         link:'www.google.com' 
    }

]

const projectsForPage=3;

let colors = [
    '#f12c06', '#faed34', '#ff7f00', '#ff4500', '#ff6347',
    '#ff8c00', '#ff3b3f', '#ff1493', '#ff69b4', '#ff00ff'

];

let gradi = [
    'url(#grad1)', 'url(#grad2)', 'url(#grad3)', 'url(#grad4)', 'url(#grad5)',
    'url(#grad6)', 'url(#grad7)', 'url(#grad8)', 'url(#grad9)', 'url(#grad10)'
];

var currentGradientIndex = 0;
var randomIndex;


function getRandomGradient() {
    randomIndex = Math.floor(Math.random() * gradi.length);
    return gradi[randomIndex];
}

function changeProjects(number){
    let item = document.getElementById('resize')
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
    let h1 = document.createElement("h1");
    h1.innerHTML=projects[number].title;
    item.appendChild(h1);
    let p = document.createElement("p");
    p.innerHTML=projects[number].description;
    item.appendChild(p);
    let a = document.createElement("a");
    a.innerHTML=projects[number].textLink;
    a.setAttribute('id', 'button');
    a.setAttribute('href', projects[number].link);
    item.appendChild(a);
}


function initProjects(){
    let item = document.getElementById('resize')
    let h1 = document.createElement("h1");
    h1.innerHTML=projects[0].title;
    item.appendChild(h1);
    let p = document.createElement("p");
    p.innerHTML=projects[0].description;
    item.appendChild(p);
    let a = document.createElement("a");
    a.innerHTML=projects[0].textLink;
    a.setAttribute('id', 'button');
    a.setAttribute('href', projects[0].link);
    item.appendChild(a);
    let list = document.getElementById('listProjetos')
    for (let index = 0; index < projectsForPage; index++) {
        let element = document.createElement("div");
        element.setAttribute('class', 'item');
        element.setAttribute('onclick', 'changeProjects('+index+')');
        let p1 = document.createElement("p");
        p1.innerHTML=projects[index].title;
        element.appendChild(p1);
        list.appendChild(element);
    }

    let balls = Math.round(projects.length/projectsForPage);
    let listBalls = document.getElementById('balls');
    for (let index = 0; index < balls; index++) {
        let element = document.createElement("div");
        element.setAttribute('onclick', 'selectBall(this, '+index+')');
        listBalls.appendChild(element);
    }

}
initProjects();

function selectBall(ele, num){
    let listBalls = document.getElementById('balls');
    for (const child of listBalls.children) {
        child.style.backgroundColor="rgb(100, 100, 100)"
      }
    ele.style.backgroundColor="white";
    let item = document.getElementById('listProjetos')
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
    for (let index = num*projectsForPage; index < num*projectsForPage+ projectsForPage; index++) {
        let element = document.createElement("div");
        element.setAttribute('class', 'item');
        element.setAttribute('onclick', 'changeProjects('+index+')');
        element.style.borderColor = colors[randomIndex];
        let p1 = document.createElement("p");
        p1.innerHTML=projects[index].title;
        element.appendChild(p1);
        item.appendChild(element);
    }
}

function mostrarPerfil() {
    // alert(projetos);
    abre_fecha();


    document.getElementById("projetos").classList.remove("active");
    setTimeout(function () {
        document.getElementById("perfil").classList.add("active");
    }, 2000);

}

function mostrarProjetos() {
    abre_fecha();
    document.getElementById('perfil').classList.remove('active');

    setTimeout(function () {
        document.getElementById("projetos").classList.add("active");
    }, 2000);


}

function fecha() {
    var elementos = document.getElementsByClassName('container');
    for (const child of elementos[0].children) {
        child.style.transition = "all 8.1s";
        child.style.opacity = "1";
    }
    var bottom = document.getElementById("bottom-right");
    var top = document.getElementById("svg-left");
    bottom.setAttribute('transform', 'translate(0,0)');
    top.setAttribute('transform', 'translate(0,0)');
}

function abre_fecha() {
    // Aplicar os gradientes atuais aos elementos SVG
    var headerGradient = getRandomGradient();

    document.getElementById('pai').setAttribute('fill', headerGradient);
    document.getElementById('pai2').setAttribute('fill', headerGradient);


    var elementos = document.getElementsByClassName('container');
    for (const child of elementos[0].children) {
        child.style.transition = "all .5s";
        child.style.opacity = "0";
    }

    // Distância proporcional baseada no tamanho da tela
    var screenWidth = screen.width;
    var halfScreenWidth = screenWidth / 2;

    var bottom = document.getElementById("bottom-right");
    var top = document.getElementById("svg-left");

    // Obtém as metades das larguras dos elementos SVG
    var halfBottomWidth = bottom.getBBox().width * 1.5;
    var halfTopWidth = top.getBBox().width * 1.5;

    // Calcula as posições para a metade da tela
    var bottomX = halfScreenWidth - halfBottomWidth;
    var topX = halfScreenWidth - halfTopWidth;


    bottom.setAttribute('transform', 'translate(-' + bottomX + ',0)');
    top.setAttribute('transform', 'translate(' + topX + ',0)');
    setTimeout(function () {
        document.getElementById('button').style.borderColor = colors[randomIndex];
        document.getElementById('listProjetos').style.boxShadow = '-1px -1px 3px ' + colors[randomIndex];
        var x = document.getElementsByClassName('item');
        for (let index = 0; index < x.length; index++) {
            x[index].style.borderColor = colors[randomIndex];

        }
    }, 2000);
    setTimeout(fecha, 2100);
}






