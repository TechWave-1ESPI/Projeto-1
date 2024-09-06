import styled from 'styled-components'

export const FooterStyle = styled.section `

#footer{
    display: flex;
    flex-direction: column;
    height: 55vh;
    width: 100%;
    background-color: #111111;
    color: grey;
    justify-content: space-evenly;
}


#redirection{
    margin-top: 2%;
    padding: 0 6%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img{
    height: 170px;
}

#footer-links{
    display: flex;
    width: 40%;
    justify-content: space-evenly;
}

#footer-links ul li{
    list-style: none;
    color: grey;
    padding: 6px;
    cursor: pointer;
}

.link{
    text-decoration: none;
    color: grey;
}

#newsletter{
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#text-newsletter h1{
    font-size: 36px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c7c7c7;
}

#text-newsletter p{
    font-size: 14px;
    color: #aaaaaa;
}

#input-newsletter input{
    width: 80%;
    border: none;
    padding-bottom: 5px;
    border-bottom: 2px solid antiquewhite;
    background-color: transparent;
    font-size: 14px;
    outline: none;
    color: white;
}

#input-newsletter button{
    width: 15%;
    height: 100%;
    background-color: white;
    border: 7px solid white;
    margin-left: 4%;
    border-radius: 2px;
    cursor: pointer;
}

#input-newsletter i{
    font-size: 20px;
}

#informacoes{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    height: 40%;
    padding: 0 6%;
}

.icon-informacao{
    padding: 0;
    margin: 0;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

.icon-informacao p{
    font-size: 13px;
    font-weight: 600;
}

.icon-informacao i{
    font-size: 25px;
}

#termos-autorizacao{
    display: flex;
    height: 15%;
    align-items: center;
    justify-content: space-between;
    padding: 0 6%;
    font-size: 14px;
    border-top: 1px solid grey;
}

#termos-autorizacao ul li{
    list-style: none;
    cursor: pointer;
}

#cookies{
    display: flex;
    gap: 20px;
}
`
