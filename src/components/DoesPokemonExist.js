import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import '../assets/App.css';
import '../assets/animate.css';
import PokemonNotFound from '../img/pokemon-not-found.png';

const NotFoundContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 68px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--light-gray-color);
  overflow: hidden;
  img {
      margin: 0 auto;
      width: 260px;
      height: auto;
      max-width: 100%;
      @media (max-width: 360px) {
        width: 200px;
        height: auto;
      }
  }
  h1 {
      font-weight: var(--font-bold); 
      font-size: 24px;
      white-space: nowrap;
      margin: 32px 0;
      @media (max-width: 360px) {
        font-size: 18px;
      }
  }
  .btn-homepage {
      background: var(--green-color);
      padding: 12px 20px;
      letter-spacing: 0.3mm;
      border-radius: 6px;
      font-weight: var(--font-bold);
      font-size: 14px;
      color: var(--white-color);
      cursor: pointer;
      transition: all .25s ease-in-out;
      &:hover {
        background: #03cb12;
      }
      @media (max-width: 360px) {
        padding: 12px 16px;
        letter-spacing: 0.3mm;
        font-size: 12px;
      }
  }
  .fa-long-arrow-alt-left {
      animation: arrow-left .7s infinite;
  }
  @keyframes arrow-left {
      0% {
          transform: translateX(0);
      }
      25% {
          transform: translateX(-3px);
      }
      25% {
          transform: translateX(-5px);
      }
      75% {
          transform: translateX(-3px);
      }
  }
`;

const DoesPokemonExist = () => {
  
  return (

    <>
      <NotFoundContainer>
        <img src={PokemonNotFound} alt="" className="animate__animated animate__zoomInDown animate__delay-1s" />
        <h1 className="animate__animated animate__bounceIn animate__delay-3s">Pokemon doesn't exist.</h1>
        <Link to='/'>
          <div className="btn-homepage animate__animated animate__bounceInUp animate__delay-2s"><i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;HOMEPAGE</div>
        </Link>
      </NotFoundContainer>
    </>
    
  );
}

export default DoesPokemonExist;
