import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import "bootstrap-icons/font/bootstrap-icons.css";

const Nav = () => {
    return(
        <>
            
            <NavStyle>
                <section id="nav">
                    <h1>Foto Site</h1>
                    <nav className="menuNav">
                        <ul className="menuLink">
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/produtos' className="link">Produtos</Link></li>
                            <li><Link to='/sobre' className="link">Sobre</Link></li>
                            <li><Link to='/contato' className="link">Contato</Link></li>
                        </ul>
                        <ul className="menuLogin">
                            <li>Login</li>
                            <li>Cadastro</li>
                        </ul>
                        <ul className="menuBag">
                            <i class="bi bi-bag"></i>   
                        </ul>

                    </nav>

                </section>
            </NavStyle>
        </>
    )
}

export default Nav
