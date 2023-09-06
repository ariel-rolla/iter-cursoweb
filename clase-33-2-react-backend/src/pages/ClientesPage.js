import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

export default function ClientesPage() {

  const [clientes, setClientes] = useState([]);

  const [ showModalClientes, setshowModalClientes] = useState(false);

  const [ nombre, setNombre] = useState("");
  const [ apellido, setApellido] = useState("");
  const [ calle, setCalle] = useState("");
  const [ altura, setAltura] = useState("");
  const [ provincia, setProvincia] = useState("");

  const [ estadoEdicion, setEstadoEdicion ] = useState(null); 

  const getClientes = () => {
    const url = "http://localhost:8000/clientes";

    fetch(url)
    .then( response => response.json())
    .then((data) => setClientes(data));
  }
  
  useEffect( getClientes, [] );


  const handleShowEditModal = (id) => {
    const url = `http://localhost:8000/clientes/${id}`;
    
    fetch(url)
    .then( response => response.json())
    .then( (result) => {
      setNombre(result.nombre);
      setApellido(result.apellido);
      setCalle(result.calle);
      setAltura(result.altura);
      setProvincia(result.id_provincia);

      setEstadoEdicion("modificar");

      handleShowModalClientes();
    })
  }

  const handleSave = (event) =>{
    console.log("Guardar", nombre, apellido, calle, altura, provincia)

    const url = "http://localhost:8000/clientes";

    let metodo = "POST"

    if( estadoEdicion === "modificar" ){
      url += `/${idCliente}`;
      metodo = "PUT";
    }

    const data = { nombre, apellido, calle, altura, provincia };

    fetch(url, { 
      method: metodo, 
      body: JSON.stringify(data), 
      headers: {"Content-Type": "application/json"},
    })
      .then( (response) => response.json())
      .then (( result ) => {
        console.log(result) 
        getClientes();
        handleCloseModalClientes();
      });
  }

  const handleDelete = (id) => {
    const url = `http://localhost:8000/clientes/${id}`;
    
    fetch(url, { method: "DELETE"} )
    .then( (response) => response.json() )
    .then (( result ) => {
      console.log(result) 
      getClientes();
    });
  }





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
          <td>
            <Button className='me-2' onClick={ () => handleShowEditModal(cliente.id)} variant='success'>Modificar</Button>
            <Button className='me-2' onClick={ () => handleDelete(cliente.id) /* () para evitar que la ejecute enseguida si se pasan parametros */ } variant='danger'>Eliminar</Button>
          </td>
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

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  }

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  }

  const handleChangeCalle = (event) => {
    setCalle(event.target.value);
  }

  const handleChangeAltura = (event) => {
    setAltura(event.target.value);
  }

  const handleChangeProvincia = (event) => {
    setProvincia(event.target.value);
  }



  return ( 
    <>
      <h1>Clientes</h1>
      <Button className='mb-3' onClick={() => {
        setNombre("");
        setApellido("");
        setCalle("");
        setAltura("");
        setProvincia("");

        setEstadoEdicion("nuevo");

        handleShowModalClientes();
      }}
        >Nuevo</Button>

      <table className='table'>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
      </table>

      <Modal show={showModalClientes} onHide={handleCloseModalClientes}>
        <Modal.Header closeButton>
          <Modal.Title>
            {
              estadoEdicion === "nuevo" ? "Nuevo Cliente" : "Modificar Cliente"
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombre" value={nombre} onChange={handleChangeNombre} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese apellido" value={apellido} onChange={handleChangeApellido} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Calle</Form.Label>
              <Form.Control type="text" placeholder="Ingrese calle" value={calle} onChange={handleChangeCalle} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="number" placeholder="Ingrese Altura" value={altura} onChange={handleChangeAltura} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID Provincia</Form.Label>
              <Form.Control type="number" placeholder="Ingrese ID provincia" value={provincia} onChange={handleChangeProvincia} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalClientes}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

