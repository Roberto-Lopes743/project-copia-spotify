import React from 'react'
import Header from '../componets/Header'
import ListItem from '../componets/ListItem'
import { artistArray } from "../database/artists";
import {songsArray} from "../database/songs"
const Home = () => {
  return (
    <>
      <main>
        <ListItem name='artistas' quant ={5} itemArray={artistArray} path='/artist'/>
        <ListItem name ='musicas' quant ={10} itemArray={songsArray} path='/song' />
      </main>
    </>
  )
}

export default Home