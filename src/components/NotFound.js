import React from 'react';
import styled from '@emotion/styled';
import '../assets/App.css';
import '../assets/animate.css';


const NotFoundContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 68px);
  padding: 72px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-gray-color);
`;

const NotFoundText = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: var(--font-bold);
  font-size: 24px;
  letter-spacing: 0.3mm;
  color: var(--green-color);
`;

const NotFound = () => {
  
  return (
    <>  
        <NotFoundContainer>
          <NotFoundText className='animate__animated animate__zoomInDown'>Page Not Found</NotFoundText>
        </NotFoundContainer>
    </>
  );
}

export default NotFound;
