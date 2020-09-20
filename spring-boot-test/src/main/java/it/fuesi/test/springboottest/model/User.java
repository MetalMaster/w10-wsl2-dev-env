package it.fuesi.test.springboottest.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
public class User {

    private String email;
    private String name;
    private String surname;

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(final String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }
}
