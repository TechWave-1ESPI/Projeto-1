import styled from 'styled-components'

export const LoginStyle = styled.section `


.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}


.login-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}


.login-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #333;
    font-weight: bold;
}


.input-group {
    margin-bottom: 1.2rem;
    text-align: left;
}


.input-group label {
    font-size: 1rem;
    color: #555;
}


.login-input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #333;
    outline: none;
    transition: border-color 0.3s ease;
}

.login-input:focus {
    border-color: #D3DE62;
}


.login-button {
    background-color: #D3DE62;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}

.login-button:hover {
    transform: scale(1.05);
}


@media (max-width: 600px) {
    .login-form {
        padding: 1.5rem;
    }

    .login-input {
        font-size: 0.9rem;
    }

    .login-button {
        font-size: 0.9rem;
    }
}
`