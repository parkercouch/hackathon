import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Header from './components/Header';

import { lifeExpectancy } from './data/lifeExpectancy2011';


const ALL_DATA = [
  lifeExpectancy,
];


class App extends Component {
  state = {
    currentYear: 2011,
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
