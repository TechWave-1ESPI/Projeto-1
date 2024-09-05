import styled from 'styled-components'

export const FooterStyle = styled.section `
*{
    font-family: "Work Sans", sans-serif;
    margin: 0;
    padding: 0;
}

#footer{
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100%;
    background-color: #111111;
    color: #d3d0d0;
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

`
