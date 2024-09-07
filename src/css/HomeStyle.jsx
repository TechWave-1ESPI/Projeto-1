import styled from 'styled-components'

export const HomeStyle = styled.section `
margin-bottom: 60px;


.main-text{
    position: absolute; /* O texto ficará parado em relação ao container */          /* Ajuste da altura conforme necessário */
    left: 50%;
    transform: translateX(-50%); /* Centraliza o texto horizontalmente */
    z-index: 1;         /* Mantém o texto acima da imagem */
    text-align: center; /* Centraliza o texto */
    letter-spacing: 10px;
}

.main-text h1{
    display: block;
    font-size: 100px;
}

.txt-and-img-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative; /* Garantia de controle da posição da imagem */
    margin-top: 50px; /* Distância da imagem em relação ao texto */
}

.img-woman{
    grid-column: 1.5fr;
    position: relative;
    padding: 0% 20%;
    z-index: 2; /* A imagem ficará atrás do texto */
    width: 50%; /* Ajuste o tamanho conforme necessário */
}

.txt-and-img-container h3{
    font-size: 35px;
}

.txt-and-button-container{
    margin-top: 20%;
}

.buttons{
    display: flex;
    margin-top: 2%;
    gap: 10px;
    
}

.buttons i{
    color: #D3DE62;
    margin-top: 1%;
    font-size: 30px;
    cursor: pointer;
}

.buttons button{
    padding: 2% 5%;
    background-color: #D3DE62;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    transition: 0.2s;
    box-shadow: 0px 0px 10px #b0b38f9e;
    cursor: pointer;
}

.buttons button:hover{
    transform: scale(1.05);
}

.buttons .secondary{
    background-color: white;
    box-shadow: 0px 0px 10px #f0f0f0;
}

.description-container{
    display: flex;
    gap: 50px;
}

.description-txt{
    margin-top: 10%;
    max-width: 300px;
    text-align: justify;
}

.description-container img{
    margin-top: 10%;
    width: 30%;
    height: 100%;
}

.scroll-btn .link{
    color: black;
    display: flex;
    gap: 10px;
    text-decoration: none;
}

.scroll-btn i{
    font-size: 40px;
}

.scroll-btn p{
    margin-top: 0.7%;
    font-size: 25px;
}

#collections{
    padding: 5% 6% 0% 6%;
    height: 50vh;
    display: flex;
    justify-content: center;
    gap: 5%;
}

#collections img{
    width: 35%;
}

.collection{
    width: 45%;
    display: flex;
    justify-content: space-around;
}

#men-collection{
    background-color: #D9E14F;
}

#men-collection p{
    text-align: right;
    padding-right: 15%;
}

#men-collection button{
    background-color: #232323;
    color: #fff;
    box-shadow: 1px 1px 10px #232323;
}

#woman-collection{
    background-color: #232323;
}

#woman-collection p{
    text-align: left;
    color: white;
    padding-left: 15%;
}

#woman-collection button{
    background-color: white;
    color: black;
    right: 0;
    box-shadow: 1px 1px 6px antiquewhite;
}

.text-collections{
    padding: 8% 0;
    width: 32%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.text-collections button{
    width: 80%;
    font-size: 16px;
    font-weight: 400;
    height: 18%;
    border: none;
    transition: 0.3s ease;
    border-radius: 3px;
}

.text-collections button:hover{
    transform: scale(1.05);
}

.text-collections p{
    font-size: 36px;
    font-weight: 500;
}

@media(max-width: 800px){
    #collections{
        height: 100vh;
        flex-direction: column;
        width: 100%;
    }

    .collection{
        width: 90%;
        display: flex;
        justify-content: space-around;
    }

    #men-collection p{
        padding-right: 40%;
    }

    #woman-collection p{
        padding-left: 40%;
    }
}
`
