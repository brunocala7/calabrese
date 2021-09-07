function sumar(){
    var numero_1 = $("#n1").val();
    var numero_2 = $("#n2").val();
    var resultado = parseInt(numero_1) + parseInt(numero_2);
    $("#mostrar_resultado").text(resultado);
}

function restar(){
    var numero_1 = $("#n1").val();
    var numero_2 = $("#n2").val();
    var resultado = parseInt(numero_1) - parseInt(numero_2);
    $("#mostrar_resultado").text(resultado);
}

function producto(){
    var numero_1 = $("#n1").val();
    var numero_2 = $("#n2").val();
    var resultado = parseInt(numero_1) * parseInt(numero_2);
    $("#mostrar_resultado").text(resultado);
}

function dividir(){
    var numero_1 = $("#n1").val();
    var numero_2 = $("#n2").val();
    var resultado = parseInt(numero_1) / parseInt(numero_2);
    $("#mostrar_resultado").text(resultado);
}