package org.campos.tesis;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ControladorClima {
@Autowired RepositorioClima repositorioClima;
    @CrossOrigin
    @RequestMapping(value="/clima", method= RequestMethod.POST,
            headers = {"Accept=application/json"})
    public Estatus guardar(@RequestBody String json)throws Exception{
        ObjectMapper maper=new ObjectMapper();
        System.out.println(json);

        Clima c=    maper.readValue(json, Clima.class);
        System.out.println("el id del celular"+c.getId());
        repositorioClima.save(c);
        System.out.println("gaurdado con exito");
        Estatus e=new Estatus();
        e.setSuccess(true);
        e.setMensaje("Usuario se ha guardado con exito");
        return e;

    }
    @RequestMapping(value="/clima", method= RequestMethod.GET,
            headers = {"Accept=application/json"})
    public ArrayList<Clima> obtenerTodo()throws Exception{
        return (ArrayList<Clima>) repositorioClima.findAll();
    }

}
