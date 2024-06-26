// import necessary hooks and components
import { useState, useEffect } from 'react';
import PlanetList from './PlanetList';
import PlanetDetails from './PlanetDetails';
import SearchBar from './SearchBar';

function App() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch planets from the API
  useEffect(() => {
    // Fetch planets from an API here
    // Then update the state with the fetched planets
  }, []);

  // Filter planets based on search term
  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>Solar System</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PlanetList planets={filteredPlanets} setSelectedPlanet={setSelectedPlanet} />
      {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
    </main>
  );
}

export default App;