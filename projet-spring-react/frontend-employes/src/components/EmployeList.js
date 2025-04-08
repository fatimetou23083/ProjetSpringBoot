import React from 'react';

function EmployeList({ employes, loading }) {
  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (employes.length === 0) {
    return <div className="no-results">Aucun employé trouvé</div>;
  }

  return (
    <div className="employe-list">
      <h3>Résultats de la recherche</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Département</th>
            <th>Salaire (€)</th>
          </tr>
        </thead>
        <tbody>
          {employes.map(employe => (
            <tr key={employe.id}>
              <td>{employe.id}</td>
              <td>{employe.nom}</td>
              <td>{employe.prenom}</td>
              <td>{employe.departement}</td>
              <td>{employe.salaire.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeList;