import React from "react";
import northPic from "./img/n.png";
import southPic from "./img/south.jpg";
import "./Hemisphere.css";

const hemsiphereConfig = {
  Northern: {
    text: "it is northern hemsiphere",
    picture: northPic
  },
  Souther: {
    text: "its is souther hemisphere",
    picture: southPic
  }
};

const HemisphereDisplay = ({ latitude }) => {
  console.log(latitude);
  const hemisphere = latitude > 0 ? "Northern" : "Souther";
  //const picture = latitude > 0 ? northPic : southPic;
  // Refactor on line 22
  const { text, picture } = hemsiphereConfig[hemisphere];

  // ES6 deconstruction
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt={text} />
        </div>
        <div className="ui teal buttom attached label">
          <h1> {text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
