import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Header from './components/Header';

import { lifeExpectancy } from './data/life_expectancy_1994_thru_2013';
import { gdp } from './data/GDP_1994_thru_2013';
import { imports } from './data/Imports_1994_thru_2013';
import { exports as countryExports } from './data/Exports_1994_thru_2013';
import { co2Emissions } from './data/CO2emissions_1994_thru_2013';


const ALL_DATA = [
  lifeExpectancy,
  co2Emissions,
  gdp,
  countryExports,
  imports
];


class App extends Component {
  state = {
    currentYear: 2013,
    currentMap: 0,
  }

  changeYear = (currentYear) => ( 
    this.setState({
      currentYear,
    })
  );

  changeMap = (currentMap) => (
    this.setState({
      currentMap,
    })
  );

  render() {
    const titles = ALL_DATA.map((dataset) => dataset.title);
    const currentYear = this.state.currentYear;
    const currentMap = this.state.currentMap;
    const currentMapData = ALL_DATA[this.state.currentMap];


    const map = 
      <Map
        title={titles[currentMap]}
        year={currentYear}
        description={currentMapData.description}
        data={currentMapData[currentYear]}
        colors={currentMapData.colors}
      />



    return (
      <div className="App helvetica">
        <Header
          mapNames={titles}
          currentMap={currentMap}
          handleChangeYear={(val) => this.changeYear(val)}
          handleChangeMap={(id) => this.changeMap(id)}
        />

        <main className="w8 center">
          {map}
        </main>

      </div>
    );
  }
}

export default App;
