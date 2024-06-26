import { useEffect, useState } from 'react';
import Planet from './Planet';

function PlanetList() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
    // Fetch planets from an API or local data source here
    // Then update the state with the fetched planets
    }, []);

    return (
        <div>
            {planets.map((planet) => (
            <Planet key={planet.id} planet={planet} />
            ))}
        </div>
    );
}