import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import logoMobile from '../../assets/images/logo-white.svg';
import logoDesktop from '../../assets/images/logo-pink.svg';
import { UserContext } from '../../context/AuthContext';

const Nav = ({ setExibeNavbar, exibeNavbar }) => {
    const { userData } = useContext(UserContext)

    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span className='navbar__close' onClick={() => { setExibeNavbar(false) }}>x</span>

            <Link to="/">
                <img
                    className='eventlogo__logo-image'
                    src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                    alt="Event Plus Logo"
                />
            </Link>

            <div className='navbar__items-box'>
                <Link to="/">Home</Link>
                { // Se o usuário for administrador
                    userData.role === "Administrador" ? (
                        <>
                            <Link to="/tipo-eventos">Tipo Eventos</Link>
                            <Link to="/eventos">Eventos</Link>
                            <Link to="/detalhes-evento">Detalhes Eventos</Link>
                        </>
                    ) : (
                        // E se o usuário for aluno
                        userData.role === "Aluno" ? (
                            <>
                                <Link to="/evento-aluno">Eventos</Link>
                                <Link to="/detalhes-evento">Detalhes Eventos</Link>
                            </>
                        ) : (
                            null
                        )
                    )
                }
                
            </div>
        </nav>
    );
};

export default Nav;