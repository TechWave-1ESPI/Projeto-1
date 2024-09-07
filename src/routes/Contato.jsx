import { ContatoStyle, FormStyle, InputStyle, ButtonStyle } from "../css/ContatoStyle"

const Contato = () => {
    return (
        <ContatoStyle>
            <h1>Contact Us</h1>
            <FormStyle>
                <label htmlFor="email">Your email:</label>
                <InputStyle type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="phone">Your phone number:</label>
                <InputStyle type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

                <label htmlFor="message">Your message:</label>
                <InputStyle as="textarea" id="message" name="message" rows="4" placeholder="Write your message" required />

                <ButtonStyle type="submit">Send</ButtonStyle>
            </FormStyle>
        </ContatoStyle>
    )
}

export default Contato;
