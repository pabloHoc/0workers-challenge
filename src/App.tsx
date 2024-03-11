import React, { useState } from 'react';

const countriesData = [
  'India',
  'USA',
  'France'
];

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleCountryChange = (country: string) => {
    setSelectedCountries(prevSelectedCountries => {
      if (prevSelectedCountries.includes(country)) {
        return prevSelectedCountries.filter(selectedCountry => selectedCountry !== country);
      } else {
        return [...prevSelectedCountries, country];
      }
    });
  };

  const handleSelectAllChange = () => {
    setSelectedCountries(prevSelectedCountries => {
      return prevSelectedCountries.length === countriesData.length ? [] : countriesData;
    });
  };

  const allSelected = selectedCountries.length === countriesData.length;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={handleSelectAllChange}
        />
        Select all
      </label>
      {countriesData.map(country => (
        <div key={country}>
          <label>
            <input
              type="checkbox"
              checked={selectedCountries.includes(country)}
              onChange={() => handleCountryChange(country)}
            />
            {country}
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;
