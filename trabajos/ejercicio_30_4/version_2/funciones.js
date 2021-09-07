let margen = "1cm";

function moverHaciaDerecha (){
    let cuadrado = document.getElementById("movil");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) + 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginLeft = margen;
    mismaPosicion();
}

function moverHaciaIzquierda (){
    let cuadrado = document.getElementById("movil");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) - 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginLeft = margen;
    mismaPosicion();
}

function moverHaciaAbajo (){
    let cuadrado = document.getElementById("movil");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) + 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginTop = margen;
    mismaPosicion();
}

function moverHaciaArriba (){
    let cuadrado = document.getElementById("movil");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) - 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginBottom = margen;
    mismaPosicion();
}

function mismaPosicion (){
    let circulo = document.getElementById("fijo");
    let cuadrado = document.getElementById("movil");

    let x1 = cuadrado.getBoundingClientRect().x;
    let y1 = cuadrado.getBoundingClientRect().y;
    let x2 = circulo.getBoundingClientRect().x;
    let y2 = circulo.getBoundingClientRect().y;

    if((x1 == x2) && (y1 == y2)){
        cuadrado.style.backgroundColor = "blueviolet";
        circulo.style.opacity = 0;
    }
    else{
        circulo.style.opacity = 100;
        cuadrado.style.backgroundColor = "brown";
    }

}