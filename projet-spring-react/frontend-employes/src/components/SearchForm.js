import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchType, setSearchType] = useState('nom');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchType, searchValue);
  };

  return (
    <div className="search-container">
      <h3>Rechercher des employés</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="searchType">Critère de recherche:</label>
          <select 
            id="searchType"
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="nom">Nom</option>
            <option value="departement">Département</option>
            <option value="salaire">Salaire minimum</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="searchValue">Valeur:</label>
          <input 
            id="searchValue"
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
  );
}

export default SearchForm;