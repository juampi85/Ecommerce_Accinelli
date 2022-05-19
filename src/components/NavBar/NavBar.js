import React from 'react';
import './NavBar.css';
import { CartWidget, IconLogoBrand, Menu, MenuItem, MenuItemButton, MenuItemButtonOption, MenuItemButtonSelect, NavBarContainer, NavBarWrapper } from './NavBar.elements';
import { MdFlutterDash } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  return (
    <>
        <NavBarContainer>
            <NavBarWrapper>
                <IconLogoBrand>
                    <MdFlutterDash size={"4em"}/>
                    Empanadas Misioneras
                </IconLogoBrand>
                <Menu>
                    <MenuItem>
                        <MenuItemButton> HOME </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> 
                          <MenuItemButtonSelect>
                            <MenuItemButtonOption selected disabled>EMPANADAS</MenuItemButtonOption>
                            <MenuItemButtonOption>Tradicionales</MenuItemButtonOption>
                            <MenuItemButtonOption>Especiales</MenuItemButtonOption>
                            <MenuItemButtonOption>Súper Especiales</MenuItemButtonOption>
                            <MenuItemButtonOption>Árabes</MenuItemButtonOption>
                          </MenuItemButtonSelect>
                      </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> PREGUNTAS FRECUENTES </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> CONTACTO </MenuItemButton>
                    </MenuItem>
                </Menu>
                <CartWidget>
                    <TiShoppingCart size={"4em"}/>
                </CartWidget>
            </NavBarWrapper>
        </NavBarContainer>
    </>
  );
};

export default NavBar;