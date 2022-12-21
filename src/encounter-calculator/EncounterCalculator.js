import { Component } from 'react';
import PlayerSection from './players/PlayersSection';
import MonstersSection from './monsters/MontersSection';

class EncounterCalculator extends Component{
  render(){
    return (
      <div className='EncounterCalculator'>
        <PlayerSection />
        <MonstersSection />
      </div>
    );
  }
}

export default EncounterCalculator;
