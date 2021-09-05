import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { MyPokemonListContext } from '../context/MyPokemonListContext';
import logo from '../img/pokepedia-logo.png';
import '../assets/App.css';
import '../assets/animate.css';

const Header = styled.header`
    position: relative;
    background: var(--white-color);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

const Navbar = styled.nav`
    max-width: 1080px;
    margin: 0 auto;
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled.div`
    position: relative;
    font-size: 13px;
    font-weight: var(--font-bold);
    letter-spacing: 0.1mm;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-text-color);
    img {
        height: 32px;
        width: auto;
    }
`;

const NavCountWrapper = styled.div`
    margin-left: 4px;
    position: relative;
    width: 20px;
    height: 20px;
    background: var(--orange-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavCountText = styled.span`
    color: var(--white-color);
    font-size: 10px;
    position: relative;
    left: 0.5px;
`;

const PokeListSmall = styled.span`
    @media (min-width: 421px) {
        display: none;
    }
`;

const PokeListLarge = styled.span`
    @media (max-width: 420px) {
        display: none;
    }
`;

const Navigation = () => {

    const [pokeDex] = useContext(MyPokemonListContext);
    
    return (
      <Header>
        <Navbar>
            <Link to='/'>
                <NavLink><img src={ logo } alt="" /></NavLink>
            </Link>
            <Link to='/my-pokemon-list'>
                <NavLink className='navlink-right'>
                    <PokeListLarge>My Pokemon List</PokeListLarge>
                    <PokeListSmall>My Poke</PokeListSmall>
                    <NavCountWrapper>
                        <NavCountText>
                            {pokeDex.length}
                        </NavCountText>
                    </NavCountWrapper>
                </NavLink>
            </Link>
        </Navbar>
      </Header>
    );
}

export default Navigation;
