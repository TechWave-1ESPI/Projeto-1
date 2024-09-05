import { FooterStyle } from "../css/FooterStyle"
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return(
        <FooterStyle>
            <section id="footer">
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
                        <p>Funcionamento: 08h - 18h</p>
                    </div>
                </div>

                <h4>@2024 - Todos os Direitos Reservados</h4>
            </section>
        </FooterStyle>
    )
}

export default Footer
