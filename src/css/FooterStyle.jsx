import styled from 'styled-components'

export const FooterStyle = styled.section `

#footer{
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100%;
    background-color: #111111;
    color: #d3d0d0;
    justify-content: space-evenly;
}

#informacoes{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    height: 40%;
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
    align-items: center;
    padding: 0 6%;
    justify-content: space-between;
    font-size: 14px;
    border-top: 1px solid white;
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
