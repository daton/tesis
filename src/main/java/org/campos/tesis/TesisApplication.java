package org.campos.tesis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TesisApplication implements CommandLineRunner{
@Autowired RepositorioUsuario repositorioUsuario;
	public static void main(String[] args) {
		SpringApplication.run(TesisApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	//repositorioUsuario.save(new Usuario("topoyiyo@outlook.com","conejo"))	;
	}
}
