package com.example.projet_spring_react.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projet_spring_react.model.Employe;

@Repository
public interface EmployeRepository extends JpaRepository<Employe, Long> {
    List<Employe> findByDepartement(String departement);
    List<Employe> findBySalaireBetween(Double min, Double max);
    List<Employe> findBySalaireGreaterThanEqual(Double salaire);
    List<Employe> findByNomContainingIgnoreCase(String nom);
    List<Employe> findBySalaire(Double salaire);
}