import { SobreStyle } from "../css/SobreStyle"
import Logo from '../assets/logo/sportstorecenter-black.svg';
import AboutImage from '../assets/about-image.png'

const Sobre = () => {
    return(
        <>
            <SobreStyle>
                <section id="about">
                    <img src={AboutImage} alt="pessoas na academia" id="about-image"/>

                    <div id="story">
                        <h1>Our Story</h1>
                        <div id="story-text">
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem sapiente, facilis ea ipsam itaque non maiores consequatur eaque iste omnis atque saepe corporis fuga deserunt? Exercitationem magnam itaque earum!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non expedita ab nostrum nulla quidem aliquid, iure magni libero rerum magnam dolorem doloribus impedit quaerat quibusdam optio voluptas molestias sint."</p>
                        </div>
                        <img src={Logo} alt="logo da loja"/>
                    </div>
                </section>
            </SobreStyle>
        </>
    )
}

export default Sobre
