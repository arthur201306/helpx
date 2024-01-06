/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package helpx.backend.controllers;

import java.util.List;

import helpx.backend.controllers.records.RequestUsers;
import helpx.backend.entities.Users;
import helpx.backend.repositories.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author arthu
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UsersRepository repository;

    @GetMapping
   public ResponseEntity getAllUsers() {
    	var allUsers = repository.findAll();
    	return ResponseEntity.ok(allUsers);
    }
    
    @PostMapping
    public ResponseEntity createUsers(@RequestBody @Validated RequestUsers data) {
    	Users newUser = new Users(data);
    	repository.save(newUser);
    	System.out.println(data);
    	return ResponseEntity.ok().build();
    }
}
