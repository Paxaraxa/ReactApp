import React from "react";
import "./card-list.style.css";
//create new componen
export const CardList = (props) => {
  console.log(props);
  //return the div with the property set in app.js
  return <div className="card-list">{props.children}</div>;
};
