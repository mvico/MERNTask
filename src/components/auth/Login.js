import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Aplica destructuring props para tener variables por separado y no todo dentro del objeto
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario, // toma una copia del objeto y agrega/modifica lo siguiente
            [e.target.name]: [e.target.value]
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar esten todos los campo

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion" />
                    </div>

                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Crear nueva cuenta
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Login;