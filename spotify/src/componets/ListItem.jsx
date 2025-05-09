import React from "react";
import SingleItem from "./SingleItem";
const ListItem = ({ name, quant }) => {
  return (
    <>
      <div className="Header">
        <h2>{name}</h2>
        <p>
          <a href="">ver mais</a>
        </p>
      </div>
      <div className="list-item">
        {
          Array(quant).fill().map((currentValue,index)=>(<SingleItem key={name+Array(quant).fill(index)}/>))
        }
        </div>
    </>
  );
};

export default ListItem;
