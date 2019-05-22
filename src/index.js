import React from "react";
import { render } from "react-dom";

import "./styles.scss";
import "./planets.css";
//import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
const App = () => (
  <div>
    <div class="container">
      <div class="cube">
        <div class="sun sunny" />

        <img
          class="image image--1"
          src="http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/06-mars-icon.png"
          alt=""
        />
        <img
          class="image image--2"
          src="http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/03-venus-icon.png"
          alt=""
        />
        <img
          class="image image--3"
          src="http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/04-earth-icon.png"
          alt=""
        />
        <img
          class="image image--4"
          src="http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/02-mercury-icon.png"
          alt=""
        />
      </div>
    </div>
    asas
  </div>
);

render(<App />, document.getElementById("app"));
