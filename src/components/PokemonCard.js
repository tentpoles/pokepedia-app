import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import '../assets/App.css';
import '../assets/animate.css';

const PokemonList = styled.div`
  background: var(--white-color);
  position: relative;
  padding: 42px 0;
  min-height: 400px;
  overflow-y: hidden;
`;

const CardWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const PokeStats = styled.div`
  padding: 18px;
  img {
    z-index: -1;
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 200px;
    height: auto;
  }
`;

const PokeType = styled.div`
  position: relative;
  text-transform: uppercase;
  background: var(--white-color);
  font-weight: var(--font-bold);
  padding: 2px 6px;
  font-size: 11px;
  letter-spacing: 0.2mm;
  border-radius: 4px;
  display: inline-block;
`;

const PokeName = styled.div`
  position: relative;
  color: var(--white-color);
  font-size: 21px;
  letter-spacing: 0.3mm;
  margin-top: 8px;
  text-transform: capitalize;
  font-weight: var(--font-bold);
`;

const ArrowRight = styled.i`
  position: absolute;
  color: var(--white-color);
  font-size: 21px;
  bottom: 16px;
  transition: all .25s ease;
  transform: translateX(-40px);
`;

const ButtonWrapper = styled.div`
  width: 100%;
  overflow-y: hidden;
  padding: 42px 24px  0 24px;
`;

const LoadMore = styled.div`
  margin: 0 auto;
  width: 160px;
  padding: 16px 0;
  text-align: center;
  border: 2px solid var(--orange-color);
  color: var(--orange-color);
  text-transform: uppercase;
  font-weight: var(--font-bold);
  font-size: 14px;
  letter-spacing: 0.3mm;
  cursor: pointer;
  border-radius: 8px;
  transition: all .25s ease;
  &:hover {
    border-color: #fb741f;
    color: #fb741f;
  }
  @media (max-width: 564px) {
    width: 100%;
  }
`;

const PokemonCard = () => {

  useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=12');
  const [bouncingLoader, setBouncingLoader] = useState(false);
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setBouncingLoader(true);
    setLoadMore(data.next);

    function createPokemonObject(results)  {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons(currentList => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
  }

  return (
    <>
      <PokemonList>

        { 

          /* Display loader while await fetching data */
          bouncingLoader ?  

          <>

            <CardWrapper>
              {allPokemons.map( (getPokemon, index) =>
                <Link to={`/pokemon/${getPokemon.name}`} key={index} className={`poke-card animate__animated animate__bounceInUp ${getPokemon.types[0].type.name}`}> 
                  <PokeStats>
                    <PokeType className={`text-${getPokemon.types[0].type.name}`}>{getPokemon.types[0].type.name}</PokeType>
                    <PokeName>{getPokemon.name}</PokeName>
                    <img src={getPokemon.sprites.other.dream_world.front_default} alt="" />
                    <ArrowRight className='fa fa-long-arrow-alt-right'></ArrowRight>
                  </PokeStats>
                </Link>
              )}
            </CardWrapper>

            <ButtonWrapper>
              <LoadMore onClick={() => getAllPokemons()} className='animate__animated animate__bounceInUp animate__delay-1s'>Load more</LoadMore>
            </ButtonWrapper>
            
          </>
          
          : 

          <div className="bouncing-loader">
            <div className="ball-1"></div>
            <div className="ball-2"></div>
            <div className="ball-3"></div>
          </div>
          /* End */ 
          
        }

      </PokemonList>
    </>
  );
}

export default PokemonCard;
