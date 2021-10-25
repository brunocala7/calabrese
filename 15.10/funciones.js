function ingresoDeAlumno(){
    $.ajax({
        url: "http://localhost:8080/api/alumnos/",
        type: 'POST'
    })
    .done(function (data) {
    
        console.log(data);
    
    })
    .fail(function (qXHR, textStatus, errorThrown) {
        console.log("error, no se pudo obtener datos");
    });
}

