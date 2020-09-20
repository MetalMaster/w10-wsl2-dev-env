package it.fuesi.test.springboottest.controllers;

import it.fuesi.test.springboottest.model.User;
import it.fuesi.test.springboottest.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserRepository repository;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public ResponseEntity<Collection<User>> getUsers(){
        final Collection<User> users = repository.findAll();
        //TODO: refactor with services and dtos
        return ResponseEntity.ok(users);
    }
}