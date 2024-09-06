import styled from 'styled-components'

export const ProdutosStyle = styled.section `


.product-container {
    padding-top: 150px;
    padding-bottom: 200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Cria 4 colunas de igual largura */
    gap: 10px; /* Espaço entre os blocos */
    align-items: center; /* Alinha as imagens verticalmente */
    justify-items: center; /* Alinha as imagens horizontalmente */
}

.product-card{
    cursor: pointer;
}

.product-img{
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #f0f0f0;
}

.product-img img {
    width: 350px;
    margin-bottom: -1%;
}

.product-info-and-btn-container{
    display: flex;
}

.tittle-price-container{
    padding: 10%;
}
.tittle-price-container p{
    font-size: 20px;
    padding-bottom: 10%;
}

.add-btn{
    padding: 4%;
    padding-top: 8%;
    margin-left: 30%;
    color: #D3DE62;
    font-size: 30px;
}

`
