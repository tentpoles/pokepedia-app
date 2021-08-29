import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { MyPokemonListContext } from '../context/MyPokemonListContext';
import '../assets/App.css';
import '../assets/animate.css';

const MyPokeListContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 68px);
  padding: 72px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-gray-color);
  overflow: hidden;
`;

const MyPokeList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MyPokemon = styled.div`
  margin: 21px;
  display: flex;
  flex-basis: 150px;
  align-items: center;
  flex-direction: column;
`;

const RoundBg = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .25s ease;
  &:hover {
    box-shadow: 
      0 0 0 6px rgba(13, 19, 26, 0.075);
  }
  &:hover > h2 {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover > span {
    top: 12px;
    right: 12px;
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  img {
    height: 90px;
    width: auto;
    filter: drop-shadow(0 0 10px rgba(13, 19, 26, 0.3));
  }
`;

const MyPokemonNickname = styled.h2`
  position: absolute;
  font-size: 12px;
  font-weight: var(--font-bold);
  letter-spacing: 0.2mm;
  border-radius: 4px;
  text-transform: uppercase;
  background: var(--white-color);
  padding: 4px 12px;
  filter: drop-shadow(0 0 10px rgba(13, 19, 26, 0.3));
  bottom: 20px;
  transition: all .25s ease;
  opacity: 0;
  transform: translateY(30px);
`;

const ReleasePokemonBtn = styled.span`
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  background: var(--red-color);
  display: flex;
  border-radius: 50%;
  top: 0;
  right: 0;
  opacity: 0;
  transition: all .25s ease;
  align-items: center;
  justify-content: center;
  i {
    font-size: 14px;
    color: var(--white-color);
  }
`;

const NoPokemonList = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: var(--font-bold);
  font-size: 24px;
  letter-spacing: 0.3mm;
  color: var(--green-color);
`;

const MyPokemonList = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pokeDex, setPokeDex] = useContext(MyPokemonListContext);
  
  const releasePokemon = (listId, nickname) => {
    if(window.confirm(`Are you sure want to release ${nickname}?`)) {
      const updatedList = pokeDex.filter((item) => item.listId !== listId)
      setPokeDex(updatedList)
    }
  }

  if(pokeDex.length > 0)
  {
    return (
      <>

        <MyPokeListContainer>
          <MyPokeList>
              {pokeDex.map((getPokeDex, index) => {
                return (
                  <MyPokemon key={index}>
                    <RoundBg className={`${getPokeDex.type} animate__animated animate__backInUp`}>
                      <Link to={`/pokemon/${getPokeDex.name}`}>
                        <ImgContainer>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokeDex.pokeId}.svg`} className="animate__animated animate__bounceIn animate__delay-1s" alt="" title={`Visit ${getPokeDex.name} detail page.`} />
                        </ImgContainer>
                      </Link>
                      <MyPokemonNickname className={`text-${getPokeDex.type}`}>
                        {getPokeDex.nickname}
                      </MyPokemonNickname>
                      <ReleasePokemonBtn type="submit" title={`Release ${getPokeDex.nickname} from your list.`} onClick={() => releasePokemon(getPokeDex.listId, getPokeDex.nickname)}>
                        <i className='fa fa-times'></i>
                      </ReleasePokemonBtn>
                    </RoundBg>
                  </MyPokemon>
                )
              })}
          </MyPokeList>
        </MyPokeListContainer>
  
      </>
    );
  }

  else {
    return (
      <>
        <MyPokeListContainer>
          <NoPokemonList className='animate__animated animate__zoomInDown'>There's no pokemon <br /> in your list</NoPokemonList>
        </MyPokeListContainer>

      </>
    )
  }
}

export default MyPokemonList;
