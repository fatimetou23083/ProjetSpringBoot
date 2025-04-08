import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('nom');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchAllEmployes();
  }, []);

  const fetchAllEmployes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/employes');
      setEmployes(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des employés:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchValue.trim()) {
      fetchAllEmployes();
      return;
    }
    
    setLoading(true);
    try {
      let url;
      switch(searchType) {
        case 'nom':
          url = `http://localhost:8080/api/recherche/nom/${searchValue}`;
          break;
        case 'departement':
          url = `http://localhost:8080/api/recherche/departement/${searchValue}`;
          break;
// في دالة handleSearch، عدلي جزء الراتب:
        case 'salaire':
          url = `http://localhost:8080/api/recherche/salaire?min=${searchValue}&exact=true`;
          break;

        default:
          url = 'http://localhost:8080/api/employes';
      }
      
      console.log("URL de recherche:", url);
      const response = await axios.get(url);
      console.log("Résultat:", response.data);
      setEmployes(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des Employés</h1>
      </header>
      
      <div className="search-container">
        <h3>Rechercher des employés</h3>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Critère de recherche:</label>
            <select 
              value={searchType} 
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="nom">Nom</option>
              <option value="departement">Département</option>
              <option value="salaire">Salaire</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Valeur:</label>
            <input 
              type="text" 
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                searchType === 'salaire' 
                  ? 'Entrez le salaire minimum' 
                  : `Entrez le ${searchType}`
              }
            />
          </div>
          
          <button type="submit">Rechercher</button>
        </form>
      </div>
      
      {loading ? (
        <div>Chargement...</div>
      ) : employes.length === 0 ? (
        <div>Aucun employé trouvé</div>
      ) : (
        <div className="employe-list">
          <h3>Résultats de la recherche</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Département</th>
                <th>Salaire</th>
              </tr>
            </thead>
            <tbody>
              {employes.map(employe => (
                <tr key={employe.id}>
                  <td>{employe.id}</td>
                  <td>{employe.nom}</td>
                  <td>{employe.prenom}</td>
                  <td>{employe.departement}</td>
                  <td>{employe.salaire} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <footer>
        <p>Système de gestion des employés - 2025</p>
      </footer>
    </div>
  );
}

export default App;