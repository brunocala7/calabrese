package com.example.demo;

import org.springframework.stereotype.Service;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

@Service
public class AccesoBaseDeDatos {

    private Connection conexion;
    private String nombreBaseDeDatos;
    private String nombreTabla;

    public AccesoBaseDeDatos(){
        /** completar **/
        this.nombreBaseDeDatos = "base";
        this.nombreTabla = "alumno";
    }

    public AccesoBaseDeDatos(String nombreBaseDeDatos, String nombreTabla) {
        this.nombreBaseDeDatos = nombreBaseDeDatos;
        this.nombreTabla = nombreTabla;
    }

    public void conectar(String user, String password) {

        String url = "jdbc:mysql://localhost:3306/" + this.nombreBaseDeDatos;
        /* línea alternativa para los que usan windows:
        String url = "jdbc:mysql://localhost/" + this.nombreBaseDeDatos + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
        */

        try {

            conexion = DriverManager.getConnection(url, user, password);

            if (conexion != null) {
                System.out.println("Se ha conectado exitosamente con la base de datos");
            } else {
                System.out.println("No se ha podido conectar con la base de datos");
            }

        } catch (SQLException excepcion) {
            excepcion.printStackTrace();
        }

    }
    
    public void modificarTabla(String consulta) {
        /* INSERT, UPDATE, DELETE */
        try {
            Statement sentencia = this.conexion.createStatement();
            sentencia.executeUpdate(consulta);
            sentencia.close();

        } catch (SQLException excepcion) {
            excepcion.printStackTrace();
        }
    }

    public ResultSet obtenerResultado(String consulta){

        ResultSet resultado = null;

        try {

            Statement sentencia = this.conexion.createStatement();
            resultado = sentencia.executeQuery(consulta);


        } catch (SQLException excepcion) {
            excepcion.printStackTrace();
        }

        return resultado;
    }

    public ResultSet seleccionarTodo(){
        String consulta = "SELECT * FROM " + this.nombreTabla;
        ResultSet resultado = this.obtenerResultado(consulta);
        return resultado;
    }

    public void imprimirDatos() {

        ResultSet resultado = this.seleccionarTodo();

        try {

            while (resultado.next()) {

                int id = resultado.getInt("id");
                String nombre = resultado.getString("nombre");
                String apellido = resultado.getString("apellido");
                int edad = resultado.getInt("edad");

                System.out.println(id + " " + nombre + " " + apellido + " " + edad);
            }

            resultado.close();

        } catch (SQLException excepcion) {
            excepcion.printStackTrace();
        }
    }

    public ResultSet mostrarColumnas(){
        String consulta = "SHOW COLUMNS FROM " + this.nombreTabla;
        ResultSet resultado = this.obtenerResultado(consulta);
        return resultado;
    }

    public ArrayList<String> colocarCamposEnLista() {

        ArrayList<String> nombresDeCampos = new ArrayList<>();
        ResultSet resultado = this.mostrarColumnas();

        try {

            while (resultado.next()) {
                String nombreDeColumna = resultado.getString("field");
                nombresDeCampos.add(nombreDeColumna);
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }

        return nombresDeCampos;
    }

    public HashMap<String,Object> obtenerDatos() throws SQLException {
        HashMap<String,Object> datos = new HashMap<>();
        ArrayList<Alumno> alumnosDeLaBase = new ArrayList<>();
        ResultSet resultado = this.seleccionarTodo();
        int numPersona = 0;

        try {
            while(resultado.next()){
                Alumno alumno = new Alumno(resultado.getInt("id"),resultado.getString("nombre"),resultado.getInt("edad"));
                alumnosDeLaBase.add(alumno);
            }
        } catch (SQLException exception){
            exception.printStackTrace();
        }
        datos.put("Alumnos: ",alumnosDeLaBase);
        return datos;
    }

    public void agregarAlumno(Alumno alumno) {
        try{
            Statement sentencia = this.conexion.createStatement();
            String consulta ="INSERT INTO " + this.nombreTabla + "(id,nombre,edad)  VALUES (" + alumno.getId() + "," + alumno.getNombre() + "," + alumno.getEdad() + ");";
            sentencia.executeUpdate(consulta);
            sentencia.close();
        }
        catch (SQLException excepcion){
            excepcion.printStackTrace();
        }
    }

    /*
    Colocar mysql-connector-java-8.0.21.jar en una carpeta llamada lib

    File -> Project Structure -> + -> JARs y directorios ->
    seleccionar mysql-connector-java-8.0.21.jar -> tildar -> aplicar -> ok
    */
}
