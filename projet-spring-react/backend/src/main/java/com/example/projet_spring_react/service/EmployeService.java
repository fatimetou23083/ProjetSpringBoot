package com.example.projet_spring_react.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet_spring_react.model.Employe;
import com.example.projet_spring_react.repository.EmployeRepository;

@Service
public class EmployeService {
    
    private final EmployeRepository employeRepository;
    
    @Autowired
    public EmployeService(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }
    
    // Ajouter ces méthodes pour résoudre les erreurs
    public List<Employe> rechercherParDepartement(String departement) {
        return employeRepository.findByDepartement(departement);
    }
    
    public List<Employe> rechercherParSalaire(Double min, Double max) {
        return employeRepository.findBySalaireBetween(min, max);
    }
    
    public List<Employe> rechercherParNom(String nom) {
        return employeRepository.findByNomContainingIgnoreCase(nom);
    }
    
    // Autres méthodes existantes s'il y en a...
}