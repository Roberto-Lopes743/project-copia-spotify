import React from 'react'
import ListItem from './ListItem'
import { songsArray } from '../database/songs'
const Ssong = () => {
  return (
    <main>
      <ListItem name='musicas' quant ={Infinity} itemArray={songsArray} path='/songs' tname='musicas'/>
      </main>
  )
}

export default Ssong