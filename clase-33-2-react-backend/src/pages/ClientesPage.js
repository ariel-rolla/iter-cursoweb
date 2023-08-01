import React, { useEffect, useState } from 'react'

export default function ClientesPage() {

  const [clientes, setClientes] = useState([]);

  const getClientes = () => {
    const url = "http://localhost:8000/clientes";

    fetch(url)
    .then( response => response.json())
    .then((data) => setClientes(data));
  }

  useEffect( getClientes, [] );

  return ( 
    <table className='table'>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
      </thead>
      <tbody>
        <tr>
          <td>Pepe</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

