import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
const ListItem = ({ name, quant, itemArray,path }) => {
  return (
    <>
      <div className="Header">
        <h2>{name}</h2>
        <p>
          <Link to="/Home" className="verMais">ver mais</Link>
        </p>
      </div>
      <div className="list-item">
        {
          itemArray
          .filter((currentValue, index) => index < quant)
          .map((currentObj, index)=> (
            <SingleItem
            {...currentObj}
            key={name+index}
            path={path}/> 
          ))
        }
      </div>
    </>
  );
};

export default ListItem;
