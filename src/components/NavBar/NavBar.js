import { Link } from 'react-router-dom';
import './NavBar.css';

import { IconLogoBrand, Menu, MenuItem, MenuItemButton, NavBarContainer, NavBarWrapper } from './NavBar.elements';
import { MdFlutterDash } from "react-icons/md";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
          <NavBarWrapper>
              <IconLogoBrand >
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
                      <Link to="/productos/tradicionales" className='text-white italic'>TrAdIcIoNaLeS</Link>
                    </MenuItemButton>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemButton>
                      <button><Link to="/productos/especiales" className='text-white italic'>EsPeCiAlEs</Link></button>
                    </MenuItemButton>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemButton>
                      <Link to="/productos/super-especiales" className='text-white italic'>SúPeR EsPeCiAlEs</Link>
                    </MenuItemButton>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemButton>
                      <Link to="/productos/arabes" className='text-white italic'>ÁrAbEs</Link>
                    </MenuItemButton>
                  </MenuItem>
                  <MenuItem>
                      <MenuItemButton> 
                        <Link to="/faq">FAQ</Link>
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