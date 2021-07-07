import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    const proyectos = [
        { nombre: 'Tienda Virtual', id: 1 },
        { nombre: 'Intranet', id: 2 },
        { nombre: 'Cotizador', id: 3 }
    ]

    return (  
        <ul className="listado-proyectos">
            {proyectos.map( p => (
                <Proyecto 
                    key={p.id}
                    proyecto={p}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;