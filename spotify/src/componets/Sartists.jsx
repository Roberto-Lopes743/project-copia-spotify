import React from 'react'
import ListItem from './ListItem'
import { artistArray } from "../database/artists";

const Sartists = () => {
  return (
    <main>
    <ListItem name='artists' quant ={Infinity} itemArray={artistArray} path='/artists' tname='artista'/>
    </main>
  )
}

export default Sartists