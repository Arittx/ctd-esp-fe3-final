import React from 'react'
import { Link } from "react-router-dom";
import { ContextProvider, useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

 

  const {handleThemeChange, state} = useContextGlobal();


  return (
    <nav style={{background:state.theme.backgroundNavbar}}>
       <Link to={'/'}  style={{color:state.theme.color}}><h2>D<span>H</span> Odonto</h2></Link>
       <div>
       <Link to={'/'} style={{color:state.theme.color}}>Home</Link>
       <Link to={'/contact'}  style={{color:state.theme.color}}>Contact</Link>
       <Link to={'/favorites'}  style={{color:state.theme.color}}>Favorites</Link>
       <button onClick={handleThemeChange}>Change theme</button>
       
       
       </div>
      
    </nav>
  )
}

export default Navbar