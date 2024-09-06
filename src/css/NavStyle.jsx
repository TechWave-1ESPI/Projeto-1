import styled from 'styled-components'

export const NavStyle = styled.section `

img{
    height: 85px;
    margin-top: 10%;
}

#nav{
    display: flex;
    height: 15vh;
    padding: 0 6%;
    background-color: #f1f1f1;
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
    margin-right: -20%;
}

`