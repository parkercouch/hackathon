import React, { Component } from 'react';
import './App.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Map from './components/Map';
import Header from './components/Header';

import { lifeExpectancy } from './data/lifeExpectancy2011';


const ALL_DATA = [
  lifeExpectancy,
];


class App extends Component {
  state = {
    currentYear: 2011,
  }

  changeYear = (currentYear) => ( 
    this.setState({
      currentYear,
    })
  );

  render() {
    const wrapperStyle = { width: 400, margin: 50 };
    const titles = ALL_DATA.map((dataset) => dataset.title);
    const allMaps = ALL_DATA.map((dataset, i) => (
      <Map id={`map${i}`} key={i} title={titles[i]} data={dataset[this.state.currentYear]} />
    ));

    return (
      <div className="App">
        <Header mapNames={titles} />

        <div style={wrapperStyle}>
          <Slider onChange={(val) => this.changeYear(val)} min={2011} max={2013} defaultValue={2013} marks={{ 2011: 2011, 2012: 2012, 2013: 2013 }} step={null} />
        </div>

        {allMaps}
      </div>
    );
  }
}

export default App;
