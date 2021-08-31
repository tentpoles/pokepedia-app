import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import DoesPokemonExist from './DoesPokemonExist';
import { MyPokemonListContext } from '../context/MyPokemonListContext';
import pokeball from '../img/pokeball.png';
import oops from '../img/oops.png';
import '../assets/App.css';
import '../assets/animate.css';

const HeaderContainer = styled.section`
  width: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  max-width: 1080px;
  padding: 72px 24px 132px 24px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 52px 24px 112px 24px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BigImage = styled.div`
  flex-basis: auto;
  overflow: hidden;
  margin-right: 64px;
  img {
    height: 340px;
    width: auto;
    @media (max-width: 600px) {
      height: 240px;
      width: auto;
    }
    @media (max-width: 380px) {
      height: 200px;
      width: auto;
    }
  }
  @media (max-width: 600px) {
    margin-right: 32px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin-top: 32px;
    flex-direction: row;
  }
`;

const ImgThumbnail = styled.div`
  margin: 6px;
  background: var(--white-color);
  border-radius: 8px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: auto;
    @media (max-width: 600px) {
      width: 50px;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const DetailContainer = styled.section`
  max-width: 1080px;
  padding: 0 24px;
  margin: -60px auto 92px auto;
`;

const Detail = styled.section`
  padding: 42px;
  background: var(--white-color);
  overflow: hidden;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background: var(--white-color);
`;

const DetailGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const PokemonName = styled.h1`
  font-size: 18px;
  letter-spacing: 0.2mm;
  font-weight: var(--font-bold);
  text-transform: capitalize;
  margin: 8px;
`;

const PokemonType = styled.h2`
  font-size: 10px;
  border-radius: 4px;
  padding: 4px 6px;
  display: inline-block;
  color: var(--white-color);
  letter-spacing: 0.3mm;
  text-transform: uppercase;
  font-weight: var(--font-bold);
`;

const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  margin: 42px 0;
  background: rgba(85, 85, 85, 0.15);
`;

const PokemonStats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StatContainer = styled.div`
  width: 90px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 940px) {
    margin: 12px 6px;
  }
`;

const StatPercentage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid currentColor;
  white-space: nowrap;
  &::before {
    content: "";
    position: absolute;
    border-right: 40px solid var(--white-color);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    transform: translateY(-50%);
    top: 50%;
    right: -10px;
  }
`;

const StatValue = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: var(--font-bold);
  color: var(--primary-text-color);
  letter-spacing: 0.1mm;
`;

const StatDescription = styled.h3`
  margin-top: 12px;
  font-size: 14px;
  white-space: nowrap;
  color: var(--primary-text-color);
  letter-spacing: 0.2mm;
`;

const PokemonMoves = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  white-space: nowrap;
`;

const MoveName = styled.h4`
  display: inline-block;
  font-size: 14px;
  white-space: nowrap;
  margin: 6px;
  letter-spacing: 0.1mm;
  padding: 3px 8px 5px 8px;
  border: 2px solid currentColor;
  border-radius: 6px;
`;

const PokeBall = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 24px;
  right: 24px;
  img {
    cursor: pointer;
    height: 80px;
    width: auto;
    @media (max-width: 480px) {
      height: 72px;
      width: auto;
    }
  }
  &:hover > div {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
`;

const CatchTheBall = styled.div`
  position: absolute;
  padding: 14px;
  border-radius: 4px;
  background: var(--green-color);
  top: 50%;
  transform-origin: right;
  opacity: 0;
  transform: translateY(-50%) scale(0);
  transition: all .25s ease;
  left: -180px;
  p {
    font-size: 13px;
    color: var(--white-color);
    letter-spacing: 0.25mm;
    font-weight: var(--font-bold);
    line-height: 5mm;
    text-transform: capitalize;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    right: -6px;
    transform: translateY(-50%) rotate(45deg);
    background: var(--green-color);
  }
`;

<<<<<<< HEAD
=======

>>>>>>> b92ed6c (First commit)
const GivePokemonNickname = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(13, 19, 26, 0.9);
<<<<<<< HEAD
  overflow: hidden;
=======
  ::-webkit-scrollbar {
    width: 0;
  }
>>>>>>> b92ed6c (First commit)
`;

const PokemonImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 54px;
  img {
    width: 180px;
    height: auto;
    margin-bottom: 54px;
    @media (max-width: 540px){
      margin-bottom: 32px;
    }
    @media (max-width: 380px){
      margin-bottom: 24px;
      width: 140px;
      height: auto;
    }
  }
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
<<<<<<< HEAD
  overflow: hidden;
=======
  overflow: auto;
  padding: 52px 0;
  ::-webkit-scrollbar {
    width: 0;
  }
>>>>>>> b92ed6c (First commit)
`; 

const FormContainer = styled.div`
  padding: 20px;
  width: 420px;
  border-radius: 12px;
  background: var(--white-color);
  @media (max-width: 480px) {
    width: 360px;
  }
  @media (max-width: 420px) {
    width: 320px;
  }
  @media (max-width: 360px) {
    width: 280px;
  }
`; 

const FormCloseBtn = styled.div`
  color: var(--white-color);
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  opacity: 1;
  top: 32px;
  transition: all .25s ease;
  right: 32px;
  &:hover {
    opacity: 0.75;
  }
`;

const FormSubmitBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 10px;
  border-radius: 3px;
  font-weight: var(--font-bold);
  letter-spacing: 0.3mm;
  background: #02910d;
  color: var(--white-color);
  text-transform: uppercase;
  transition: all .5s ease;
  font-size: 12px;
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background: var(--green-color);
  }
`;

const FailedAlert = styled.div`
  width: 100%;
  display: flex;
  margin-top: -40px;
  justify-content: center;
  img {
    margin-bottom: -20px;
    position: relative;
    width: 240px;
    height: auto;
    @media (max-width: 420px) {
<<<<<<< HEAD
      width: 180px;
=======
      width: 160px;
>>>>>>> b92ed6c (First commit)
      height: auto;
    }
  }
`; 

const FailedNotification = styled.p`
  color: var(--white-color);
  width: 310px;
  text-align: center;
  letter-spacing: 0.2mm;
  line-height: 6mm;
  font-size: 14px;
  margin-bottom: 42px;
  span {
    text-transform: capitalize;
  }
  @media (max-width: 420px) {
    width: 260px;
  }
`;

const FailedAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`; 

const InputGroup = styled.div`
  position: relative;
`;

const TryAgainBtn = styled.button`
  border-radius: 3px;
  font-weight: var(--font-bold);
  letter-spacing: 0.3mm;
  background: #fb741f;
  color: var(--white-color);
  text-transform: uppercase;
  transition: all .5s ease;
  font-size: 12px;
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background: var(--orange-color);
  }
`;

const Note = styled.div`
  background: var(--light-gray-color);
  margin-top: 18px;
  padding: 16px;
  border-radius: 6px;
  p {
    letter-spacing: 0.2mm;
    font-size: 13px;
    line-height: 5mm;
  }
  span:first-of-type {
    font-weight: var(--font-bold);
  }
  span {
    text-transform: capitalize;
  }
`;

const PokemonDetail = ({match}) => {

  useEffect(() => {
    const getPokemon = async () => {
      const getPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);
      const pokemon = await getPokemon.json();
      if(pokemon) {
        setDoesPokemonExist(true);
        setPokemon(pokemon);
        console.log(pokemon);
      }
    };
    getPokemon();
    window.scrollTo(0, 0);
  }, [match.params.name]);

  const [pokemon, setPokemon] = useState({
    id: null,
    name: '',
    sprites: { back_default: '', back_shiny: '', front_default: '', front_shiny: '', other: { dream_world: { front_default: '' } } },
    stats: [ { base_stat: '', }, { base_stat: '', }, { base_stat: '', }, { base_stat: '', }, { base_stat: '', }, { base_stat: '', } ],
    types: [ { type: { name: '', } } ],
    moves: [ { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } }, { move: { name: '', } } ],
    weight: '',
    height: '',
  });

  const [pokeDex, setPokeDex] = useContext(MyPokemonListContext);
  const [pushPokeDex, setPushPokeDex] = useState('');
  const [doesPokemonExist, setDoesPokemonExist] = useState(false);
  const [rafflePokemonProbability, setRafflePokemonProbability] = useState(false);
  const [displayFormPokemonNickname, setDisplayFormPokemonNickname] = useState(false);

  const catchPokemon = (event) => {
    setRafflePokemonProbability(true);
    /* 
    
      Set the success probability to 50%
      it would generate numbers in range between 0 - 1
      so if the 2 variables have the equal value, user allowed to catch pokemon.
      Great!

    */
    const valueX = Math.floor(Math.random() * 2);
    const valueY = Math.floor(Math.random() * 2);
    if(valueX === valueY) {
      setDisplayFormPokemonNickname(true);
      console.log(valueX, '==', valueY, "The value is equal, you allowed to catch pokemon!");
    }
    else {
      setDisplayFormPokemonNickname(false);
      console.log(valueX, '==', valueY, "The value isn't equal, you aren't allowed to catch pokemon!");
    }
  }

  const catchComplete = (event) => {
    setRafflePokemonProbability(false);
    setDisplayFormPokemonNickname(false);
  }

  const inputPokeListNickname = (event) => {
    setPushPokeDex(event.target.value);
  }
  
  const addPokeList = (event) => {
    event.preventDefault();
    const pokeId = document.getElementById('pokemonId').value;
    const pokeType = document.getElementById('pokemonType').value;
    setPokeDex(prevPokeDex => [...prevPokeDex, {listId: pokeDex.length+1, pokeId: parseInt(pokeId), name: match.params.name , nickname: pushPokeDex, type: pokeType}]);
    alert(`Yay! ${pushPokeDex} successfully added to your pokemon list.`)
    setPushPokeDex('')
    setRafflePokemonProbability(false);
    setDisplayFormPokemonNickname(false);
  }
  
  if(doesPokemonExist) {
    return (
      <>
  
        <HeaderContainer className={`${pokemon.types[0].type.name}`}>
          <Header>
            <BigImage>
              <img src={pokemon.sprites.other.dream_world.front_default} alt="" className='animate__animated animate__backInUp'/>
            </BigImage>
            <Thumbnail>
              <ImgThumbnail className="animate__animated animate__backInUp animate__delay-1s animate__fast">
                <ImgContainer>
                  <img src={pokemon.sprites.front_default} alt="" />
                </ImgContainer>
              </ImgThumbnail>
              <ImgThumbnail className="animate__animated animate__backInUp animate__delay-1s">
                <ImgContainer>
                  <img src={pokemon.sprites.back_default} alt="" />
                </ImgContainer>
              </ImgThumbnail>
              <ImgThumbnail className="animate__animated animate__backInUp animate__delay-1s animate__fast">
                <ImgContainer>
                  <img src={pokemon.sprites.front_shiny} alt="" />
                </ImgContainer>
              </ImgThumbnail>
              <ImgThumbnail className="animate__animated animate__backInUp animate__delay-1s">
                <ImgContainer>
                  <img src={pokemon.sprites.back_shiny} alt="" />
                </ImgContainer>
              </ImgThumbnail>
            </Thumbnail>
          </Header>
        </HeaderContainer>
  
        <DetailContainer className="animate__animated animate__fadeInUp animate__delay-2s">
          <Detail>
            <DetailGroup>
              <PokemonName>#{pokemon.id} - {pokemon.name}</PokemonName>
              <PokemonType className={`${pokemon.types[0].type.name}`}>{pokemon.types[0].type.name}</PokemonType>
            </DetailGroup>
            <LineBreak></LineBreak>
            <PokemonStats className={`text-${pokemon.types[0].type.name}`}>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.height}</StatValue></StatPercentage>
                <StatDescription>Height</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.weight}</StatValue></StatPercentage>
                <StatDescription>Weight</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[0].base_stat}</StatValue></StatPercentage>
                <StatDescription>Health Point</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[1].base_stat}</StatValue></StatPercentage>
                <StatDescription>Attack</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[2].base_stat}</StatValue></StatPercentage>
                <StatDescription>Defense</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[3].base_stat}</StatValue></StatPercentage>
                <StatDescription>++ Attack</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[4].base_stat}</StatValue></StatPercentage>
                <StatDescription>++ Defense</StatDescription>
              </StatContainer>
              <StatContainer>
                <StatPercentage><StatValue>{pokemon.stats[5].base_stat}</StatValue></StatPercentage>
                <StatDescription>Speed</StatDescription>
              </StatContainer>
            </PokemonStats>
            <LineBreak></LineBreak>
  
            <PokemonMoves>
  
              {
  
                pokemon.moves.length < 8 ? 
  
                <>
                  <MoveName>{pokemon.moves[0].move.name}</MoveName>
                  <MoveName>{pokemon.moves[1].move.name}</MoveName>
                  <MoveName>{pokemon.moves[2].move.name}</MoveName>
                  <MoveName>{pokemon.moves[3].move.name}</MoveName>
                </>
  
                : 
  
                <>
                  <MoveName>{pokemon.moves[0].move.name}</MoveName>
                  <MoveName>{pokemon.moves[1].move.name}</MoveName>
                  <MoveName>{pokemon.moves[2].move.name}</MoveName>
                  <MoveName>{pokemon.moves[3].move.name}</MoveName>
                  <MoveName>{pokemon.moves[4].move.name}</MoveName>
                  <MoveName>{pokemon.moves[5].move.name}</MoveName>
                  <MoveName>{pokemon.moves[6].move.name}</MoveName>
                  <MoveName>{pokemon.moves[7].move.name}</MoveName>
                </>
  
              }
  
            </PokemonMoves>
            
          </Detail>
        </DetailContainer>
  
        {
  
          rafflePokemonProbability ?
  
          <GivePokemonNickname className="animate__animated animate__fadeIn">
            <ModalContainer>
  
              {
  
                displayFormPokemonNickname ?
  
                <>
                  <PokemonImage className='animate__animated animate__fadeIn  animate__delay-2s'>
                    <img src={pokemon.sprites.other.dream_world.front_default} className='animate__animated animate__pulse animate__delay-3s animate__infinite' alt=""/>
                  </PokemonImage>
                  <FormContainer className='animate__animated animate__zoomInDown  animate__delay-1s'>
                    <form onSubmit={addPokeList}>
                      <InputGroup>
                        <input type="text" value={pokemon.id} id="pokemonId" hidden readOnly />
                        <input type="text" value={pokemon.types[0].type.name} id="pokemonType" hidden readOnly />
                        <input type="text" maxLength="20" value={pushPokeDex} onChange={inputPokeListNickname} id="input-pokemon-nickname" className="input-pokemon-nickname" required />
                        <label htmlFor="input-pokemon-nickname" className="label-pokemon-nickname">Pokemon nickname</label>
                        <FormSubmitBtn>Let's Go!</FormSubmitBtn>
                      </InputGroup>
                    </form>
                    <Note><p><span>Note: </span>Once you've catched <span>{pokemon.name}</span>, kindly please give this pokemon nickname before it can add to your pokemon list. But if you decided to leave it blank and skip this session, you won't able to see <span>{pokemon.name}</span>  in your pokemon list.</p></Note>
                  </FormContainer>
                </>
  
                :
                
                <>
                  <FailedAlert className='animate__animated animate__zoomInDown'>
                    <img src={oops} className='animate__animated animate__pulse animate__delay-2s animate__infinite'  alt=""/>
                  </FailedAlert>
                  <FailedNotification className='animate__animated animate__fadeIn animate__delay-1s'>
                    <span>{pokemon.name}</span> has ran away! It doesn't matter, you can always try again on next chance you want. You need to know that success probability is 50%. Good luck!
                  </FailedNotification>
                  <FailedAction>
                    <TryAgainBtn onClick={catchComplete} className='animate__animated animate__backInUp animate__delay-1s'>Try Again</TryAgainBtn>
                  </FailedAction>
                </>
  
              }
  
            </ModalContainer>
            <FormCloseBtn onClick={catchComplete}><i className="fa fa-times-circle"></i></FormCloseBtn>
          </GivePokemonNickname>
  
          :
  
          <>
          </>
  
        }
  
        <PokeBall onClick={catchPokemon}>
          <CatchTheBall>
            <p>Let's catch <br />This {pokemon.name}!</p>
          </CatchTheBall>
          <img src={pokeball} className="animate__animated animate__swing animate__delay-1s animate__infinite"  alt=""/>
        </PokeBall>
        
      </>
    );
  }

  else {
    return (

      <>
        <DoesPokemonExist></DoesPokemonExist>
      </>

    )
  }
  
}

export default PokemonDetail;
