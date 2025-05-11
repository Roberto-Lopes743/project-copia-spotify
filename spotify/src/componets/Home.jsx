import React from 'react'
import ListItem from '../componets/ListItem'
import { artistArray } from "../database/artists";
import {songsArray} from "../database/songs"
const Home = () => {
  return (
    <>
      <main>
        <ListItem name='artistas' quant ={5} itemArray={artistArray} path='/artists' tname='artista'/>
        <ListItem name ='musicas' quant ={10} itemArray={songsArray} path='/songs' tname='musicas'/>
      </main>
    </>
  )
}

export default Home