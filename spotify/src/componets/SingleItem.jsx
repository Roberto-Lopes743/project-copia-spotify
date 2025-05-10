import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({id,name,image,banner,path}) => {
  return (
    <>
      <div className="tem-list-container">
        <Link to={path+'/'+id}>
        <div className="single-item">
          <div className="item">
            <img className="single-item-image"
              src={image}
              alt="imagem do artista x"
            />
            <FontAwesomeIcon className="single-item_play" icon={faCirclePlay} />
              <p>{name} <br />artist</p>
              
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default SingleItem;
