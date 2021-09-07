function posibleMailValido(mail){
        var es_valido = false;

        if(mail[0] != '@' && mail[mail.length - 1] != '@'){
            for(i = 1;i < mail.length - 1;i++){
                if(mail[i] == '@'){
                    es_valido = true;
                    break;
                }
            }
        }

        return es_valido;
                
}

function posibleTelefonoValido(telefono){
        var es_valido = false;
        var cant_digitos = 0;

        if(telefono.startsWith("011")){
            for(i = 3;i < telefono.length;i++){
                cant_digitos++;
            }
        }
        else if(telefono.startsWith("11")){
            for(i = 2;i < telefono.length;i++){
                cant_digitos++;
            }
        }

        if(cant_digitos == 8){
            es_valido = true;
        }

        return es_valido;
    }