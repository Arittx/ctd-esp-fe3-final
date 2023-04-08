import React from 'react'
import { useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {state} = useContextGlobal();


  return (
    <main className=""  style={{color:state.theme.color, background:state.theme.backgroundHome}} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.element.map((info)=>{

          return(<Card  key={info.id} id={info.id} name={info.name} username={info.username} />)
          
        })}
      </div>
    </main>
  )
}

export default Home