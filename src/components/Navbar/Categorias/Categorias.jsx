import { Link } from "react-router-dom";
import React from 'react';

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                <button className='btn btn-secondary'>
                    Inicio
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/category/1"}>
                <button className='btn btn-secondary'>
                    Productos de limpieza
                </button>
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/category/2"}>
                <button className='btn btn-secondary'>
                    Productos de hidratación
                </button>
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/category/3"}>
                <button className='btn btn-secondary'>
                    Productos de uso nocturno
                </button>
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/category/4"}>
                <button className='btn btn-secondary'>
                    Lociones faciales
                 </button>
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={"/category/5"}>
                <button className='btn btn-secondary'>
                    Protección solar
                </button>
            </Link>
            </li>
        </ul>
    );
}