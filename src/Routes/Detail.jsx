import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {

  const {state} = useContextGlobal();
  const [odontologo, setOdontologo] = useState({})
  const parametro = useParams();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${parametro.id}`)
    .then(response => (response.json()))
    .then(res => setOdontologo(res))

},[])

console.log(parametro.id)

  return (
    <div style={{color:state.theme.color, background: state.theme.backgroundHome}} className="detail">
      <h1>Detail Dentist {odontologo.id} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{odontologo.name}</td>
                        <td>{odontologo.email}</td>
                        <td>{odontologo.phone}</td>
                        <td>{odontologo.website}</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Detail