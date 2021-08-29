import React from 'react';
import styled from '@emotion/styled';
import '../assets/App.css';
import '../assets/animate.css';

const SupportedByContainer = styled.div`
    background: var(--light-gray-color);
`;

const SupportedBy = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 92px 24px;
    img {
        margin: 16px;
        transition: all .5s ease;
        height: 72px;
        width: auto;
        filter: grayscale(100%);
        opacity: 0.6;
        &:hover {
            opacity: 1;
        }
        @media (max-width: 660px) {
            height: 50px;
            width: auto;
            margin: 12px;
        }
        @media (max-width: 380px) {
            height: 40px;
            margin: 8px;
            width: auto;
        }
    }
    @media (max-width: 520px) {
        padding: 64px 24px;
    }
`;

const FooterContainer = styled.footer`
    background: #e0e0e0;
`;

const MyFooter = styled.div`
    max-width: 1080px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.2mm;
    flex-wrap: wrap;
`;

const MyName = styled.h2`
    font-size: 14px;
    margin: 4px;
    @media (max-width: 380px) {
        font-size: 12px;
    }
`;

const MySocial = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    a {
        transition: all .25s ease;
        text-decoration: none;
        margin: 4px;
        color: var(--primary-text-color);
        &:hover {
            color: #000;
        }
    }
`;

const MySocialMedia = styled.span`
    font-size: 16px;
`;

const Footer = () => {
  return (

    <>
        <SupportedByContainer className="animate__animated animate__fadeIn animate__delay-4s">
            <SupportedBy> 
                <a href="https://code.visualstudio.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" alt="" />
                </a>
                <a href="https://reactjs.org/">
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" />
                </a> 
                <a href="https://www.google.com/intl/id_id/chrome/">
                    <img src="https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-logo-png-0.png" alt="" />
                </a>
                <a href="https://nodejs.org/en/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png" alt="" />
                </a>
                <a href="https://emotion.sh/docs/introduction">
                    <img src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png" alt="" />
                </a>
                <a href="https://github.com/">
                    <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" />
                </a>
                <a href="https://www.npmjs.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="" />
                </a>
                <a href="https://pokeapi.co/">
                    <img src="https://pokeapi.co/static/pokeapi_256.888baca4.png" alt="" />
                </a>
                <a href="https://stackoverflow.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" alt="" />
                </a>
            </SupportedBy>
        </SupportedByContainer>

        <FooterContainer className="animate__animated animate__fadeIn animate__delay-5s">
            <MyFooter>
                <MyName>Copyright &#169; B. Alkautsar</MyName>
                <MySocial>
                    <a href="https://www.instagram.com/tentpolesman"><MySocialMedia className='fab fa-instagram'></MySocialMedia></a>
                    <a href="https://www.linkedin.com/in/b-alkautsar"><MySocialMedia className='fab fa-linkedin'></MySocialMedia></a>
                    <a href="https://codepen.io/b-alkautsar"><MySocialMedia className='fab fa-codepen'></MySocialMedia></a>
                    <a href="https://github.com/tentpoles"><MySocialMedia className='fab fa-github'></MySocialMedia></a>
                </MySocial>
            </MyFooter>
        </FooterContainer>

    </>
    
  );
}

export default Footer;
