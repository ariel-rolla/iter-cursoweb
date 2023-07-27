function Encabezado({nombreDeLaEmpresa, domicilio, nombreDueño}) { 
    // destructuring directo en funcion en vez de poner props y despues en una variable
    //const {nombreDeLaEmpresa, domicilio, nombreDueño} = props
    
    return (  
        <header>
            <h1>{nombreDeLaEmpresa}</h1>
            <h2>{domicilio}</h2>
            <h2>{nombreDueño}</h2>
            <p>Contenido---------</p>
        </header>          
        );
}

export default Encabezado;