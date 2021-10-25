function ingresoAlumno() {
    //obtiene los datos que el user pasa por el forms 
    var idIngresada = document.getElementById("id").value;
    var nombreIngresado = document.getElementById("nombre").value;
    var edadIngresada = document.getElementById("edad").value;

    let objetoConInformacion = {id:idIngresada,nombre:nombreIngresado,edad:edadIngresada};

    $.ajax({
        url: "http://localhost:8080/api/datos/alumnos",
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(objetoConInformacion)
    })
    .done(function (data) {

        console.log("funciono");

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error, no se pudo ingresar los nuevos datos");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}

function editarAlumno() {
    //obtiene los datos que el user pasa por el forms
    var idIngresada = 1;
    var campo = verificar();
    var valor = 15;
    console.log(campo);

    let objetoConActualizacion = {campo : valor};

    $.ajax({
        url: "http://localhost:8080/api/alumnos/" + idIngresada,
        type: 'PATCH',
        contentType: "application/json",
        data: JSON.stringify(objetoConActualizacion)
    })
    .done(function (data) {

    /* hace algo con el objeto "data" recibido, si es que recibe algo*/

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error, no se pudo ingresar los nuevos datos");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}

function borrarAlumno(){
    var id = 1;

    var url = "http://localhost:8080/api/alumnos/" + id;

    

    $.ajax({
        url: url,
        type: 'DELETE',
    })
    .done(function (data) {

    /* hace algo con el objeto "data" recibido, si es que recibe algo */

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error, no se pudo ingresar los nuevos datos");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}

function verificar() {
    var campo = "";
    let valores = document.getElementsByName("check");
    for(var i = 0;i < valores.length;i++){
        if(valores[i].checked){
            var valor = valores[i].value;
            if(valor == 1){
                campo = "nombre";
            }
            else if(valor == 2){
                campo = "edad";
            }
        }
    }
    return campo;
}

function buscarAlumno() {
    var idIngresada = 1;
    $.ajax({
        url: "http://localhost:8080/api/alumnos/" + idIngresada,
        type: 'GET'
    })
    .done(function (data) {

    /* hace algo con el objeto "data" recibido, si es que recibe algo */

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error, no se pudo obtener datos");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}