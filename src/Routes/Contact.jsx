import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useContextGlobal();

  return (
    <div className='bodycontact' style={{background:state.theme.backgroundHome}}>
      <h2 className='tamañocontacth2' style={{color:state.theme.color}}>Want to know more?</h2>
      <p className='tamañocontactp' style={{color:state.theme.color}}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact