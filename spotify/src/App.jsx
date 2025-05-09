import { useState } from 'react'
import Header from '../src/componets/Header'
import ListItem from './componets/ListItem'
function App() {
  return (
    <>
      <Header />
      <main>
        <ListItem name='artistas' quant ={10} />
        <ListItem name ='musicas' quant ={20} />
      </main>
        
    </>
  )
}

export default App
