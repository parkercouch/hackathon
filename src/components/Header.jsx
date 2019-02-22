import * as React from "react";

const Header = (props) => (
  <header className="App-header">
    <h1>Hackathon!</h1>
    <nav className="nav">
      {props.mapNames.map((title, i) => (
        <a href={`#map${i}`} key={i}>{title}</a>
      ))}
    </nav>
  </header>
);

export default Header;