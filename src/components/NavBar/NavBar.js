import React from 'react';
import './NavBar.css';
import { IconLogoBrand, Menu, MenuItem, MenuItemButton, NavBarContainer, NavBarWrapper } from './NavBar.elements';
import { MdFlutterDash } from "react-icons/md";

const NavBar = () => {
  return (
    <>
        <NavBarContainer>
            <NavBarWrapper>
                <IconLogoBrand>
                    <MdFlutterDash size={"4em"}/>
                    Accinelli's Misteryous Store
                </IconLogoBrand>
                <Menu>
                    <MenuItem>
                        <MenuItemButton> HOME </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> PRODUCTOS </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> PREGUNTAS FRECUENTES </MenuItemButton>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemButton> CONTACTO </MenuItemButton>
                    </MenuItem>
                </Menu>
            </NavBarWrapper>
        </NavBarContainer>
    </>
  );
};

export default NavBar;