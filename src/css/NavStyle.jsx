import styled from 'styled-components'

export const NavStyle = styled.section`

img{
    height: 85px;
    margin-top: 10%;
}

#nav{
    display: flex;
    height: 15vh;
    padding: 0 6%;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px #f0f0f0;
}

.menu-nav{
    width: 50%;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu-link{
    list-style: none;
    display: flex;
    gap: 45px;
}

.link{
    font-size: 1.08rem;
    color: black;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
}   

.link::after{
    content: " ";
    width: 0;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
}

.link:hover::after{
    width: 100%;
}

.menu-nav i{
    color: black;
    font-size: 18px;
} 

.menu-bag{
    background-color: #D3DE62;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.menu-login{
    list-style: none;
    text-align: end;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    margin-right: -15%;
}

@media(max-width: 1200px){
    #nav{
        justify-content: space-evenly;
    }

    .menu-login{
        margin: 0;
    }
}

@media(max-width: 800px){
    img{
        left: 0;
        height: 70px;
    }

    #nav{
        flex-direction: column;
    }

    .menu-nav{
        flex-direction: column;
        justify-content: center;
    }

    .menu-link{
        margin-top: 1.5rem;
        text-align: center;
        flex-direction: column;
        gap: 2.4rem;
        order: 3;
    }

    .menu-login{
        order: 2;
        text-align: center;
        margin-right: 0;
        width: 100%;
    }

    .menu-login li{
        padding-top: 2.4rem;
    }

    .menu-bag{
        order: 1;
    }

    .link:hover::after{
        width: 0;
    }


    .icon{
        top: 3%;
        position: absolute;
        right: 5%;
        z-index: 999;
        width: fit-content;
        height: 40px;
        cursor: pointer;
    }

    .hamburguer{
        top: 50%;
        right: 10%;
        width: 30px;
        height: 6px;
        background: black;
        position: absolute;
        transition: 0.5s ease;
    }

    .hamburguer::before{
        top: -180%;
        content: '';
        position: absolute;
        width: 30px;
        height: 6px;
        background: black;
        transition: 0.5s ease;
    }

    .hamburguer::after{
        top: 180%;
        content: '';
        position: absolute;
        width: 30px;
        height: 6px;
        background: black;
        transition: 0.5s ease;
    }

    .icon.icon-active .hamburguer{
        background: transparent;
    }

    .icon.icon-active .hamburguer::after{
        top: 0;
        transform: rotate(225deg);
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }

    .icon.icon-active .hamburguer::before{
        top: 0;
        transform: rotate(135deg);
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }

    .menu-nav.menu-nav-open{
        position: fixed;
        z-index: 100;
        width: 40vw;
        height: 100vh;
        right: 0;
        background: #eeeeee;
        box-shadow: 10px 0px 69px 0px rgba(0, 0, 0, 0.59);
    }

    .menu-nav.menu-nav-close{
        display: none;
        width: 0vw;
    }

}

`