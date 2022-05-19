import styled from "styled-components";

// Contenedor del Navbar
export const NavBarContainer = styled.div `
  width: 100%;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #49426c;
`;

// Contenedor INTERNO del Navbar
export const NavBarWrapper = styled.div `
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #ebc88b;
`;

// Div que contiene al LOGO y al Brand
export const IconLogoBrand = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-size: 1.2rem;
/* color: #ebc88b; */
`;

// Menú
export const Menu = styled.ul `
//   height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  export const MenuItem = styled.li `
  height: 100%;
  padding: 0.5ren 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  &:hover {
  background-color: #343257;
  border-bottom: 0.3rem solid #ebc88b;
  transition: 0.4s ease-in;
  }
`;

export const MenuItemButton = styled.button `
   text-decoration: none;
    margin: 0 0.5em;
   color: #ebc88b;
   background:#49426c;
   border-radius: 20%;
   border: none;
`;

export const MenuItemButtonSelect = styled.select `
  background-color:#49426c;
  color: #ebc88b;
  border: none;
`


export const MenuItemButtonOption = styled.option `
  border: none;
  background-color:#49426c;
  color: #ebc88b;
`

export const CartWidget = styled.button `
  color: #ebc88b;
  background-color: #49426c;
  border: none;
  &:hover {
    transform: scale(1.3);
    transition: 0.4s ease-in;
  }
`