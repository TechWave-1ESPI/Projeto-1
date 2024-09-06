import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo/sportstorecenter-black.svg';
import { NavStyle } from "../css/NavStyle";

const Nav = () => {

    return (
        <>
            <NavStyle>
                <section id="nav">
                    <Link to='/'><img src={Logo} alt="logo site" /></Link>
                    <nav className="menu-nav">
                        <ul className="menu-link">
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/produtos' className="link">Produtos</Link></li>
                            <li><Link to='/sobre' className="link">Sobre</Link></li>
                            <li><Link to='/contato' className="link">Contato</Link></li>
                        </ul>
                        <ul className="menu-login">
                            <li>Login</li>
                            <li>Cadastro</li>
                        </ul>
                        <ul className="menu-bag">
                            <i className="bi bi-bag"></i>
                        </ul>
                    </nav>
                </section>
            </NavStyle>
        </>
    );
}

export default Nav;
