import React, { useState } from 'react';
import styled from 'styled-components';
import davinci from '../assets/images/davinci.jpg';
import raphael from '../assets/images/raphael.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f9f2e8;
  font-family: 'Cormorant Garamond', serif;
  color: #5a3e2b;
`;

const Scroll = styled.div`
  background-color: #eee2d0;
  border: 12px solid #c2a375;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  width: 600px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  
  &:before, &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #8b4513;
    border-radius: 50%;
  }
  
  &:before {
    top: -20px;
    left: calc(50% - 20px);
  }
  
  &:after {
    bottom: -20px;
    left: calc(50% - 20px);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #8b4513;
  font-weight: 500;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ArtworkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Artwork = styled.img`
  max-width: 250px;
  height: auto;
  border: 8px solid #c2a375;
  margin: 0 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    max-width: 200px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#8b4513' : '#eee2d0'};
  color: ${props => props.primary ? '#f9f2e8' : '#8b4513'};
  border: 2px solid #8b4513;
  padding: 0.8rem 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#744010' : '#e5d5b8'};
    transform: translateY(-2px);
  }
`;

const ResponseMessage = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  font-weight: ${props => props.accepted ? 'bold' : 'normal'};
  color: ${props => props.accepted ? '#45762a' : '#762a2a'};
`;

const DateProposal = ({ onAccept, accepted }) => {
  const [response, setResponse] = useState(null);
  
  const handleAccept = () => {
    setResponse({ accepted: true, message: "Splendide ! Je suis honoré par votre acceptation. Votre grâce et votre beauté rivalisent avec celles de Vénus elle-même." });
    if (onAccept) onAccept();
  };
  
  const handleDecline = () => {
    setResponse({ accepted: false, message: "Hélas ! Mon cœur se brise comme un vase fragile. Peut-être que les étoiles s'aligneront pour nous dans un autre temps." });
  };

  return (
    <PageContainer>
      <Title>Une Invitation Renaissance</Title>
      
      <Scroll>
        <Paragraph>
          Ma très chère demoiselle, comme le soleil se lève chaque jour pour répandre ses rayons dorés sur la Terre,
          de même mon cœur s'élève à la simple pensée de vous.
        </Paragraph>
        
        <Paragraph>
          Me feriez-vous l'extraordinaire honneur de m'accompagner pour une splendide soirée de
          fine gastronomie et de conversation stimulante ? Comme le pinceau de da Vinci sur la toile, je souhaite
          créer des souvenirs de beauté et d'émerveillement avec vous à mes côtés.
        </Paragraph>
        
        <ArtworkContainer>
          <Artwork src={davinci} alt="Œuvre de Da Vinci" />
          <Artwork src={raphael} alt="Œuvre de Raphaël" />
        </ArtworkContainer>
        
        <Paragraph>
          Comme les maîtres d'antan qui cherchaient la beauté et la vérité en toutes choses, je recherche votre
          compagnie pour ce qui sera, je l'espère, une soirée inoubliable. Qu'en dites-vous ?
        </Paragraph>
        
        {!response && !accepted && (
          <ButtonContainer>
            <Button primary onClick={handleAccept}>
              Accepter avec Plaisir
            </Button>
            <Button onClick={handleDecline}>
              Décliner avec Grâce
            </Button>
          </ButtonContainer>
        )}
        
        {(response || accepted) && (
          <ResponseMessage accepted={response ? response.accepted : accepted}>
            {response ? response.message : "Splendide ! Je suis ravi que vous ayez accepté mon invitation. Je me réjouis à l'idée de partager ce moment de grâce avec vous."}
          </ResponseMessage>
        )}
      </Scroll>
    </PageContainer>
  );
};

export default DateProposal; 