import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateProposal from './components/DateProposal';
import RenaissanceBorder from './components/RenaissanceBorder';

// Add custom Google font for Renaissance feel
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap');
  font-family: 'Cormorant Garamond', serif;
  min-height: 100vh;
  background-color: #f9f2e8;
`;

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f2e8;
  color: #8b4513;
  font-size: 1.5rem;
  text-align: center;
  
  p {
    margin: 1rem 0;
  }
`;

const QuillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  &:after {
    content: "✒️";
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  
  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAccept = () => {
    setAccepted(true);
  };
  
  if (loading) {
    return (
      <LoadingScreen>
        <QuillIcon />
        <p>Préparation d'une invitation des plus exquises...</p>
        <p>Un moment, je vous prie</p>
      </LoadingScreen>
    );
  }
  
  return (
    <GlobalStyle>
      <RenaissanceBorder />
      <DateProposal onAccept={handleAccept} accepted={accepted} />
    </GlobalStyle>
  );
}

export default App;
