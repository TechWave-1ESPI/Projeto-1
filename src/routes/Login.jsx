import {useRef} from 'react'
import { LoginStyle } from '../css/LoginStyle';

const Login = () => {
    const usuario = useRef();
    const senha = useRef();

    const handleLogin = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        if (usuario.current.value === "AdminSistema" && senha.current.value === "246810") {
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

            sessionStorage.setItem("usuario", "Admin");
            sessionStorage.setItem("senha", token);

            alert("Seja Bem-vindo à nossa LOJA!");
        } else {
            alert("Usuário/Senha INVÁLIDOS, tente NOVAMENTE!");
        }
    };

    return (
        <LoginStyle>
        <section className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2 className="login-title">Login</h2>
                <div className="input-group">
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        placeholder="Digite seu Usuário"
                        ref={usuario}
                        className="login-input"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua Senha"
                        ref={senha}
                        className="login-input"
                    />
                </div>

                <button type="submit" className="login-button">Entrar</button>
            </form>
        </section>
        </LoginStyle>
    );
};

export default Login;