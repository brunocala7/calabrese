function nuevosDatos() {
    let columna = document.getElementById("ingresoDatos");

    if(!columna){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let forms = document.createElement("input");
        let forms2 = document.createElement("input");
        let forms3 = document.createElement("input");

        forms.setAttribute("id","nombre");
        forms2.setAttribute("id","apellido");
        forms3.setAttribute("id","colegio");

        tr.setAttribute("id","ingresoDatos");

        td1.appendChild(forms);
        td2.appendChild(forms2);
        td3.appendChild(forms3);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        document.getElementById("tabla").appendChild(tr);
    }

    
}

function agregarFila() {
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    var valor = document.getElementById("nombre").value;

    td1.innerHTML = document.getElementById("nombre").value;
    td2.innerHTML = document.getElementById("apellido").value;
    td3.innerHTML = document.getElementById("colegio").value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    var tr_a_borrar = document.getElementById("ingresoDatos");

    document.getElementById("tabla").appendChild(tr);
    document.getElementById("tabla").removeChild(tr_a_borrar);
}

function cambiar_estilo () {
    $("#tabla").css("margin-left","100px");
    $("#tabla").css("color","white");
    $("td").css("background-color","black");

    let valorMargen = $("#tabla").css("margin-left");
    let color = $("#tabla").css("color");
    let colorFondo = $("td").css("background-color");
    
    let mensaje = "El elemento modificado es la tabla" + "\n";
    mensaje += "El valor del margen izquierdo es: " + valorMargen + "\n";
    mensaje += "El valor del color es: " + colorFondo + "\n" ;

    alert(mensaje);

}