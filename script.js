let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList=""
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
}

//Funcion que aplica a las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("premiere");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

function verCV(){
    var enlace = document.createElement('a');
    enlace.href = 'file:///C:/Users/Impah/Desktop/PORTFOLIO/imagenes/certificados/CV%20-%20SANTIAGO%20IMPINI.pdf';
    enlace.target = 'CV-SANTIAGO IMPINI.pdf';
    enlace.click();
}

