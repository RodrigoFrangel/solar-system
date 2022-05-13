import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="beautiful-planets">
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
