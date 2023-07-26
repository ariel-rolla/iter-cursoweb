function Encabezado(props) {
    return (  
        <header>
            <h1>{props.nombreDeLaEmpresa}</h1>
            <h2>{props.domicilio}</h2>
            <p>Contenido---------</p>
        </header>          
        );
}

export default Encabezado;