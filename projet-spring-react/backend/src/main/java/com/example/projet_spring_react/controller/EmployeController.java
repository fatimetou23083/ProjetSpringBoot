package com.example.projet_spring_react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projet_spring_react.model.Employe;
import com.example.projet_spring_react.repository.EmployeRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/employes")
@CrossOrigin(origins = "http://localhost:3000")
@Tag(name = "Employés", description = "API pour gérer les employés")
public class EmployeController {

    private final EmployeRepository employeRepository;
    
    @Autowired
    public EmployeController(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }
    
    @Operation(summary = "Récupérer tous les employés", description = "Renvoie la liste de tous les employés")
    @GetMapping
    public List<Employe> getAllEmployes() {
        return employeRepository.findAll();
    }
    
    @Operation(summary = "Ajouter un employé", description = "Ajoute un nouvel employé à la base de données")
    @PostMapping
    public Employe addEmploye(@RequestBody Employe employe) {
        return employeRepository.save(employe);
    }
}