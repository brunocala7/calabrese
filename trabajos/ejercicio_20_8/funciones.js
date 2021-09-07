codigo = 0;

function circulo() {
    radio = $("#f1").val();
    resultado = radio * radio * Math.PI;
    $("#resultado").text(resultado);
}

function esfera() {
    radio = $("#f1").val();
    resultado = radio * radio * Math.PI * 4;
    $("#resultado").text(resultado);
}

function cuadrado() {
    lado = $("#f1").val();
    resultado = lado * lado;
    $("#resultado").text(resultado);
}

function cubo() {
    lado = $("#f1").val();
    resultado = lado * lado * 6;
    $("#resultado").text(resultado);
}

function triangulo() {
    base = $("#f1").val();
    altura = $("#f2").val();
    resultado = (base * altura)/2;
    $("#resultado").text(resultado);   
}

function boton(c){
    codigo = c;
    if(c != 5){
        document.getElementById("f2").setAttribute("disabled","disabled");
    }
    else{
        document.getElementById("f2").removeAttribute("disabled","disabled");
    }
}

function control(){
    switch (codigo) {
        case 1:
            circulo();
            break;
        case 2:
            esfera();
            break;
        case 3:
            cuadrado();
            break;
        case 4:
            cubo();
            break;
        case 5:
            triangulo();
            break;
    }
}