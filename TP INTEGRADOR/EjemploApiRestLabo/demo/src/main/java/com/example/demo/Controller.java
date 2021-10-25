package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

/** url: http://localhost:8080/api/... **/

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller {

    @Autowired
    private AccesoBaseDeDatos accesoABaseDeDatos;

    public Controller() {
        this.accesoABaseDeDatos = new AccesoBaseDeDatos("personas","alumnos");
    }


    @RequestMapping(value = "/datos/alumnos", method = RequestMethod.GET)
    public ResponseEntity<Object> obtenerPaginas() throws SQLException {
        accesoABaseDeDatos.conectar("alumno","alumnoipm");
        HashMap<String, Object> datos = accesoABaseDeDatos.obtenerDatos();
        return new ResponseEntity<>(datos, HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos", method = RequestMethod.POST)
    public ResponseEntity<Object> agregarPagina(@RequestBody HashMap alumno) {
        accesoABaseDeDatos.conectar("alumno","alumnoipm");
        System.out.println(alumno.get("id"));
        int id = Integer.parseInt((String) alumno.get("id"));
        String nombre = (String) alumno.get("nombre");
        int edad = Integer.parseInt((String) alumno.get("edad")) ;
        System.out.println(id);
        Alumno nuevoAlumno = new Alumno(id,nombre,edad);
        accesoABaseDeDatos.agregarAlumno(nuevoAlumno);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

