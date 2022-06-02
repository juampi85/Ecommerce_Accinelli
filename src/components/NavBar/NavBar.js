import React from 'react';
import './NavBar.css';
import { IconLogoBrand, Menu, MenuItem, MenuItemButton, MenuItemButtonOption, MenuItemButtonSelect, NavBarContainer, NavBarWrapper } from './NavBar.elements';
import { MdFlutterDash } from "react-icons/md";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

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
                    <MenuItemButton>
                    <Link to="/">HOME</Link>
                    </MenuItemButton>
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
                      <MenuItemButton> 
                        <Link to="/faq">PREGUNTAS FRECUENTES</Link>
                      </MenuItemButton>
                  </MenuItem>
                  <MenuItem>
                      <MenuItemButton> 
                        <Link to="/contacto">CONTACTO</Link>
                      </MenuItemButton>
                  </MenuItem>
              </Menu>
              <CartWidget />
          </NavBarWrapper>
      </NavBarContainer>
  </>
  );
};

export default NavBar;