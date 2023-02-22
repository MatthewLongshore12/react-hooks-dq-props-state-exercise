import React, { useState } from "react";
// import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog( props ) {
  const [ weight, setWeight ] = useState( 0) 

  function handleChangeWeight( e ) {
    setWeight( e.target.value )
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if( e.target.name === "+" ) {

      setWeight( weight + 1 )

    } else if( e.target.name === "-" && weight > 0 ) {

      setWeight( weight - 1 )
    }
  }

  const theEyeMapper = {
    glowing: GlowingBaby,
    sun: SunBaby,
    blue: BlueBaby
  }

  

  return (
    <li className="hogbabies">
      <h1>Name{props.name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color:{props.eyes}</h4>

      <button onClick={ handleChangeWeight } name="+">Increase Weight</button>
      <button onClick={ handleChangeWeight } name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={ theEyeMapper[ props.eyes ] }
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
