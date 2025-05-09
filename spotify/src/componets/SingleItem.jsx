import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { artistArray } from "../database/artists";
import {songsArray} from "../database/songs"
const SingleItem = () => {
console.log()
  return (
    <>
      <div className="tem-list-container">
        <div className="single-item">
          <div className="item">
            <img
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="imagem do artista x"
            />
            <FontAwesomeIcon className="single-item_play" icon={faCirclePlay} />
            <p>
              <a href="">Henrique & Juliano <br />artista</a>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
