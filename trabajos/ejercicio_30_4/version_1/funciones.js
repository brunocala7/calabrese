let margen = "1cm";

function moverHaciaDerecha (){
    let cuadrado = document.getElementById("cuadrado");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) + 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginLeft = margen;
    mismaPosicion();
}

function moverHaciaIzquierda (){
    let cuadrado = document.getElementById("cuadrado");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) - 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginLeft = margen;
    mismaPosicion();
}

function moverHaciaAbajo (){
    let cuadrado = document.getElementById("cuadrado");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) + 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginTop = margen;
    mismaPosicion();
}

function moverHaciaArriba (){
    let cuadrado = document.getElementById("cuadrado");
    let nuevoValorDeMargen = parseInt(margen.charAt(0)) - 1;
    margen = nuevoValorDeMargen + "cm";
    cuadrado.style.marginBottom = margen;
    mismaPosicion();
}

function mismaPosicion (){
    let cuadrado_nuevo = document.getElementById("cuadradoNuevo");
    let cuadrado_viejo = document.getElementById("cuadrado");

    let x1 = cuadrado_nuevo.getBoundingClientRect().x;
    let y1 = cuadrado_nuevo.getBoundingClientRect().y;
    let x2 = cuadrado_viejo.getBoundingClientRect().x;
    let y2 = cuadrado_viejo.getBoundingClientRect().y;

    if((x1 == x2) && (y1 == y2)){
        cuadrado_nuevo.style.opacity = 0;
    }
    else{
        cuadrado_nuevo.style.opacity = 100;
    }

}