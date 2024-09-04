import styled from 'styled-components'

export const NavStyle = styled.section `

*{
    font-family: "Work Sans", sans-serif;
}

#nav{
    display: flex;
    background-color: #EEEEF0;
    padding: 0 6%;
    align-items: center;
    justify-content: space-between;
}

.menuNav{
    width: 50%;
    height: 70px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menuLink{
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

.menuNav i{
    color: black;
    font-size: 18px;
} 

.menuBag{
    background-color: #D3DE62;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.menuLogin{
    list-style: none;
    text-align: end;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    margin-right: -30px;
}

`