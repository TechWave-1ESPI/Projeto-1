import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"

const Nav = () => {
    return(
        <>
            <NavStyle>
                <section className="nav">
                    <Link to='/' className="link">Home</Link>
                    <Link to='/produtos' className="link">Produtos</Link>
                    <Link to='/sobre' className="link">Sobre</Link>
                    <Link to='/contato' className="link">Contato</Link>
                </section>
            </NavStyle>
        </>
    )
}

export default Nav
