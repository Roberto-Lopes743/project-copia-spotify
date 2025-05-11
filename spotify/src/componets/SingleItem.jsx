import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({id,name,image,path,tname}) => {
  return (
    <>
      <div className="tem-list-container">
        <Link to={path+'/'+id}>
        <div className="single-item">
          <div className="item">
            <img className="single-item-image"
              src={image}
              alt={`imagem do artista ${name}`}
            />
            <FontAwesomeIcon className="single-item_play" icon={faCirclePlay} />
              <p>{name} <br />{tname}</p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default SingleItem;
