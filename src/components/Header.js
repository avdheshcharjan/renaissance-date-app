import React from 'react';
import styled from 'styled-components';
import { GiQuillInk } from 'react-icons/gi';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f8f1e5;
  border-bottom: 2px solid #c9b18c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  color: #5e3023;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #8c5d42;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  color: #5e3023;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Une Invitation Spéciale</Title>
      <Subtitle>Dans le Style de la Renaissance</Subtitle>
      <IconWrapper>
        <GiQuillInk />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header; 