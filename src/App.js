import { Component } from 'react';
import EncounterCalculator from './encounter-calculator/EncounterCalculator';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className='App'>
        <EncounterCalculator />
      </div>
    );
  }
}

export default App;
