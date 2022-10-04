import React from 'react';
import {Container, Logo, Menu, MenuItem} from './styles';
// @ts-ignore
import logoImg from '../../assets/logo_white.png';
import RoutersContext from "../../context/RoutersContext";

function Header() {
    const routersContext = React.useContext(RoutersContext);

    return (
        <Container>
            <Logo src={logoImg}/>
            <Menu>
                <MenuItem href={routersContext.Home}>Home</MenuItem>
                <MenuItem>Sobre</MenuItem>
                <MenuItem>Contato</MenuItem>
                <MenuItem>Lugares</MenuItem>
            </Menu>
        </Container>
    );
}

export default Header;