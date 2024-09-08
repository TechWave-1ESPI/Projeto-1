import styled from 'styled-components'

export const SobreStyle = styled.section `

#about{
    padding: 3% 6% 5% 6%;
    display: flex;
    height: 65vh;
}

#about-image{
    height: 100%;
    width: 60%;
}

#story{
    width: 40%;
    padding-left: 6%;
}

#story h1{
    text-align: end;
    font-size: 60px;
    text-transform: uppercase;
}

#story-text{
    margin-top: 10%;
}

#story-text p{
    padding: 8px 0;
    text-align: justify;
}

#story img{
    height: 20vh;
    width: 110%;
}

@media(max-width: 1200px){
    #story img{
        display: none;
    }

    #story h1{
        font-size: 40px;
    }
}

@media(max-width: 800px){
    #about{
        flex-direction: column;
        height: 105vh;
        width: 100%;
        padding: 0;
    }

    #about-image{
        height: 30%;
        width: 100%;
    }

    #story{
        width: 100%;
        padding: 0;
    }

    #story h1{
        text-align: center;
        margin-top: 4%;
    }

    #story-text{
        padding: 0 10%;
        margin-top: 3%;
        margin-bottom: 4%;
    }

    #story img{
        display: none;
    }
}

`
