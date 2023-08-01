import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function ClientesPage() {

  const [clientes, setClientes] = useState([]);

  //const [showModalCluente, set]

  const getClientes = () => {
    const url = "http://localhost:8000/clientes";

    fetch(url)
    .then( response => response.json())
    .then((data) => setClientes(data));
  }
  
  useEffect( getClientes, [] );

  const getTableBody = () => {

/*     const rows = [];

    for (let i = 0; i< clientes.length; i++) {
      rows.push(
        <tr>
          <td>{clientes[i].nombre}</td>
          <td>{clientes[i].apellido}</td>
        </tr>
      )
      
    }
     */

    const rows = clientes.map( (cliente) => {
      return (
        <tr>
          <td>{cliente.nombre}</td>
          <td>{cliente.apellido}</td>
        </tr>
      )
    })

    return rows;
  }

  const handleClose = () => {
    console.log("cerrar el modal")
  }

  return ( 
    <>
      <h1>Clientes</h1>
      <Button>Nuevo</Button>

      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <table className='table'>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
      </table>
    </>
  )
}

