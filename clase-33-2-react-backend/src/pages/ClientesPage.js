import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

export default function ClientesPage() {

  const [clientes, setClientes] = useState([]);

  const [ showModalClientes, setshowModalClientes] = useState(false);

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

  const handleShowModalClientes = () => {
    setshowModalClientes(true);
  }

  const handleCloseModalClientes = () => {
    setshowModalClientes(false);
  }

  return ( 
    <>
      <h1>Clientes</h1>
      <Button className='mb-3' onClick={handleShowModalClientes}>Nuevo</Button>

      <table className='table'>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
      </table>

      <Modal show={showModalClientes} onHide={handleCloseModalClientes}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombre" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese apellido" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Calle</Form.Label>
              <Form.Control type="text" placeholder="Ingrese calle" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="number" placeholder="Ingrese Altura" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID Provincia</Form.Label>
              <Form.Control type="number" placeholder="Ingrese ID provincia" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalClientes}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCloseModalClientes}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

