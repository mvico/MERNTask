import React from 'react'
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';


const proyectoState = props => {
    // Define un state inicial -> Siempre es un objeto
    const initialState = {
        nuevoProyecto: false
    }

    // Dispatch para ejecutar las acciones, es una funcion para poder modificar el state
    // useReducer recibe primero una funcion con la cual se crea la logica para editar el state, segundo un objeto que tiene el state inicial
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Funciones CRUD
}