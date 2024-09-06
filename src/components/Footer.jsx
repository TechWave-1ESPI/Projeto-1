import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Logo from '../assets/logo/sportstorecenter-white.svg';
import { FooterStyle } from "../css/FooterStyle";

const Footer = () => {
    return (
        <FooterStyle>
            <section id="footer">
                <div id="redirection">
                    <Link to='/'><img src={Logo} alt="logo site" /></Link>

                    <div id="footer-links">
                        <ul>
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/produtos' className="link">Produtos</Link></li>
                            <li><Link to='/sobre' className="link">Sobre</Link></li>
                            <li><Link to='/contato' className="link">Contato</Link></li>
                        </ul>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                    <div id="newsletter">
                        <div id="text-newsletter">
                            <h1>Newsletter</h1>
                            <p>Want to know about out offers first?</p>
                        </div>
                        <div id="input-newsletter">
                            <input type="text" placeholder="useremail@gmail.com" />
                            <button><i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

                <div id="informacoes">
                    <div className="icon-informacao">
                        <i class="bi bi-telephone"></i>
                        <p>+55 (11) 1234-5678</p>
                    </div>

                    <div className="icon-informacao">
                        <i class="bi bi-geo-alt"></i>
                        <p>Av. Paulista - 1106 <br></br>Bela Vista - São Paulo - SP</p>
                    </div>

                    <div className="icon-informacao">
                        <i class="bi bi-envelope"></i>
                        <p>lojaesportes@fiap.com.br</p>
                    </div>

                    <div className="icon-informacao">
                        <i class="bi bi-clock"></i>
                        <p>Monday - Friday | 08h - 18h <br /> Saturday | 08h - 12h</p>
                    </div>
                </div>

                <div id="termos-autorizacao">
                    <ul>
                        <li><p>Copyright @2024 - Todos os Direitos Reservados</p></li>
                    </ul>

                    <ul id="cookies">
                        <li>Privacy & Cookies</li>
                        <li>|</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </section>
        </FooterStyle>
    )
}

export default Footer
