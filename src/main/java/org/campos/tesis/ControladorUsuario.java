package org.campos.tesis;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorUsuario {

    @Autowired
    RepositorioUsuario repositorioUsuario;
    //  aqui a contnuacion van las 5 operaciones basicas con la entidad usuario

    @RequestMapping(value="/usuario/{id}", method= RequestMethod.GET,
            headers = {"Accept=application/json"})
    public Usuario obtenerPorId(@PathVariable String id)throws Exception{
        return repositorioUsuario.findOne(id);
    }

    @RequestMapping(value="/usuario", method= RequestMethod.GET,
            headers = {"Accept=application/json"})
    public ArrayList<Usuario> obtenerTodos()throws Exception{
        return (ArrayList<Usuario>) repositorioUsuario.findAll();
    }

    @CrossOrigin
    @RequestMapping(value="/usuario", method= RequestMethod.POST,
            headers = {"Accept=application/json"})
    public Estatus guardar(@RequestBody String json)throws Exception{
           ObjectMapper maper=new ObjectMapper();
        System.out.println(json);

       Usuario u=    maper.readValue(json, Usuario.class);
        System.out.println("el email es"+u.getEmail());
           repositorioUsuario.save(u);
        System.out.println("gaurdado con exito");
           Estatus e=new Estatus();
           e.setSuccess(true);
           e.setMensaje("Usuario se ha guardado con exito");
           return e;

    }

    @RequestMapping(value="/usuario", method= RequestMethod.PUT,
            headers = {"Accept=application/json"})
    public Estatus actualizar(@RequestBody String json)throws Exception{
        ObjectMapper maper=new ObjectMapper();
        Usuario u=    maper.readValue(json, Usuario.class);
        repositorioUsuario.save(u);
        Estatus e=new Estatus();
        return e;

    }
    @RequestMapping(value="/usuario/{id}", method= RequestMethod.DELETE,
            headers = {"Accept=application/json"})
    public Estatus borrar(@PathVariable String id)throws Exception{

        repositorioUsuario.delete(id);
        Estatus e=new Estatus();
        return e;

    }





}
