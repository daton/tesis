package org.campos.tesis;


import org.springframework.data.annotation.Id;


public class Usuario {
    @Id
    String id;
    String email;
    String password;

    public Usuario(String id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public Usuario(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Usuario(String id) {
        this.id = id;
    }

    public Usuario() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
