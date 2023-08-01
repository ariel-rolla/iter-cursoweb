import React, { useEffect, useState } from 'react'

export default function ProductosPage() {

  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    const url = "http://localhost:8000/productos";

    fetch(url)
    .then( response => response.json())
    .then((data) => setProductos(data));
  }
  
  useEffect( getProductos, [] );

  const getTableBody = () => {

    /* const rows = [];

    for (let i = 0; i< productos.length; i++) {
      rows.push(
        <tr>
          <td>{productos[i].nombre}</td>
          <td>{productos[i].precio}</td>
        </tr>
      )
      
    } */

    const rows = productos.map( (producto) => {
      return (
        <tr>
          <td>{producto.nombre}</td>
          <td>{producto.precio}</td>
        </tr>
      )
    })
    
    return rows;
  }

  return ( 
    <table className='table'>
      <thead>
        <th>Nombre</th>
        <th>Precio</th>
      </thead>
      <tbody>
        {getTableBody()}
      </tbody>
    </table>
  )
}
