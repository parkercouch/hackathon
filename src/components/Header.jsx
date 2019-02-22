import * as React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Header = (props) => { 
  const wrapperStyle = { width: 400, margin: 50 };
  const selected = "f4 lh-copy h3-5 ttu fw5 link dim ba bw1 ph3 pb3 pt3 mb2 dib black bg-white pointer selected";
  const notSelected = "f4 lh-copy h3 ttu fw5 link dim ph3 pb3 pt3 mb2 dib white bg-black pointer";

  return (
    <header className="bg-white tc ">
      <h1
        className="f1"
      >
        Countries Impact On the World
      </h1>
      <nav className="nav bg-black db h3 w-100">
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
      <div style={wrapperStyle}>
        <div className="slider-container">
          <p>1990</p> 
          <Slider
            className="slider"
            onChange={props.handleChangeYear}
            min={2011}
            max={2013}
            defaultValue={2013}
            step={1}
          /> 
          <p>2013</p>
        </div>
      </div>
    </header>
  )
};

export default Header;