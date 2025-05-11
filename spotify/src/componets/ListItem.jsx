import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
const ListItem = ({ name, quant, itemArray, path, tname }) => {
  return (
    <>
      <div className="Header">
        <h2>{name}</h2>
        <p>
          <Link to={path} className="verMais">
              ver mais
          </Link>
        </p>
      </div>
      <div className="list-item">
        {itemArray
          .filter((currentValue, index) => index < quant)
          .map((currentObj, index) => (
            <SingleItem
              {...currentObj}
              key={name + index}
              path={path}
              tname={tname}
            />
          ))}
      </div>
    </>
  );
};

export default ListItem;
