package com.example.projet_spring_react.model;


import jakarta.persistence.*;

@Entity
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nom;
    private String prenom;
    private String departement;
    private Double salaire;
    
    // Constructeur par défaut
    public Employe() {
    }
    
    // Constructeur avec paramètres
    public Employe(String nom, String prenom, String departement, Double salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.departement = departement;
        this.salaire = salaire;
    }
    
    // Getters et setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getPrenom() {
        return prenom;
    }
    
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    
    public String getDepartement() {
        return departement;
    }
    
    public void setDepartement(String departement) {
        this.departement = departement;
    }
    
    public Double getSalaire() {
        return salaire;
    }
    
    public void setSalaire(Double salaire) {
        this.salaire = salaire;
    }
}