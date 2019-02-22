import * as React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Header = (props) => { 
  const selected = "f5 h2-5 lh-title ttu fw5 link dim ba bw1 ph3 pb3 pt1 mb2 dib black bg-white pointer selected relative shadow-5";
  const notSelected = "f5 h2 ttu fw5 link dim ph3 pb3 pt1 mb2 dib white bg-black pointer";

  return (
    <header className="bg-white tc ma0 pa0">
      <h1
        className="f2 mt2 mb3 mh0 pa0"
      >
        Developing World
      </h1>
      <nav className="nav bg-black db h2-2 w-100 mb3">
        {props.mapNames.map((title, i) => (
          <div
            className={i === props.currentMap ? selected : notSelected}
            key={i}
            onClick={() => props.handleChangeMap(i)}
          >
            {title}
          </div>
        ))}
      </nav>
      <div className="bg-white w-100 pa0 pb4 ma0 shadow-5">
        <div className="dib w-100 pa0 ma0">
          <p className="dib b pa0 ma0">1994</p> 
          <Slider
            className="dib measure ba br-pill bw1 mh3 mt2"
            onChange={props.handleChangeYear}
            min={1994}
            max={2013}
            defaultValue={2013}
            step={1}
            trackStyle={{display: "none", visibility: "hidden"}}
            handleStyle={{position: "relative", top:"-8px", height: "25px", width: "25px", border: "2px black solid"}}
          /> 
          <p className="dib b pa0 ma0 ml2">2013</p>
        </div>
      </div>
    </header>
  )
};

export default Header;