import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ketchumImg from '../img/ach-ketchum.png';
import PokemonCard from './PokemonCard';
import Footer from './Footer';
import '../assets/App.css';
import '../assets/animate.css';

const BannerContainer = styled.section`
  background: var(--green-color);
  width: 100%;
`;

const Flexbox = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 660px) {
    padding: 48px 24px;
  }
`;

const HalfLeft = styled.div`
  flex-grow: 1;
  margin-right: 24px;
  h1 {
    max-width: 480px;
    color: var(--white-color);
    font-weight: var(--font-bold);
    letter-spacing: 0.3mm;
    font-size: 24px;
    line-height: 8mm;
    margin-bottom: 12px;
  }
  p {
    max-width: 520px;
    color: var(--white-color);
    font-size: 13px;
    font-weight: var(--font-regular);
    letter-spacing: 0.2mm;
    line-height: 5.5mm;
    margin-bottom: 24px;
    @media (min-width: 960px) {
      margin-bottom: 36px;
    }
  }
  @media (max-width: 660px) {
    flex-grow: 0;
    width: 100%;
    margin-right: 0;
  }
`;

const HalfRight = styled.div`
  padding-top: 12px;
  img {
    position: relative;
    top: 10px;
    height: 400px;
    width: auto;
    @media (max-width: 840px) {
      height: 340px;
      width: auto;
    }
    @media (min-width: 960px) {
      height: 460px;
      width: auto;
    }
  }
  @media (max-width: 660px) {
    display: none;
  }
`;

const BoxWrapper = styled.div`
  max-width: 550px;
  position: relative;
  @media (max-width: 660px) {
    width: 100%;
    max-width: 100%;
  }
`;

const SearchBox = styled.input`
  width: 100%;
  font-size: 14px;
  transition: all .25s ease;
  letter-spacing: 0.2mm;
  height: 55px;
  color: var(--primary-text-color);
  padding: 0 120px 0 24px;
  border-radius: 12px;
  &:focus {
    outline: 0;
    border: 0;
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.25);
  }
`;

const SearchButton = styled.button`
  right: 6px;
  top: 6px;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.3mm;
  position: absolute;
  background: var(--orange-color);
  padding: 14px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: var(--font-bold);
  transition: all .5s ease;
  &:hover {
    background: #fb741f;
  }
`;

const Home = () => {

  const [pokemonName, setPokemonName] = useState('');
  const [validLength, setValidLength] = useState(false);
  
  const formHandler = (event) => {
    event.preventDefault();
  }

  const pokemonSearchHandler = (event) => {
    setPokemonName(event.target.value.toLowerCase());
    const inputLength = event.target.value.length;
    inputLength > 0 ? setValidLength(true) : setValidLength(false);
  }

  return (
    <>

      <BannerContainer>
        <Flexbox>
          
          <HalfLeft>
            <h1 className='animate__animated animate__bounceInLeft animate__fast'>All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.</h1>
            <p className='animate__animated animate__bounceInLeft'>Sword and Shield data might be inaccurate and lacking in various aspects due to the fact that it is not taken directly from Nintendo's Pokemon ROMs.</p>
            <BoxWrapper className='animate__animated animate__bounceInLeft animate__fast'>
              <form onSubmit={formHandler}>
                <SearchBox type="text" placeholder="Pokemon name..." required onChange={pokemonSearchHandler}></SearchBox>

                { 

                  /* Form validation */
                  validLength ? 

                  <Link to={`/pokepedia/pokemon/${pokemonName}`}>
                    <SearchButton>Search</SearchButton>
                  </Link>

                  : 

                  <SearchButton>Search</SearchButton>
                  /* End */ 

                }
                
              </form>
            </BoxWrapper>
          </HalfLeft>

          <HalfRight>
            <img src={ ketchumImg } className='animate__animated animate__fadeInUp' alt="" />
          </HalfRight>

        </Flexbox>
      </BannerContainer>

      <PokemonCard></PokemonCard>
      <Footer></Footer>

    </>
  );
}

export default Home;
