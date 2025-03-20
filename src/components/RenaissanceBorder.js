import React from 'react';
import styled from 'styled-components';

const BorderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
`;

const Corner = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  
  &:before, &:after {
    content: "";
    position: absolute;
    background-color: #8b4513;
  }
  
  &:before {
    width: 40px;
    height: 12px;
  }
  
  &:after {
    width: 12px;
    height: 40px;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    &:before {
      width: 30px;
      height: 8px;
    }
    
    &:after {
      width: 8px;
      height: 30px;
    }
  }
`;

const TopLeft = styled(Corner)`
  top: 20px;
  left: 20px;
  
  &:before {
    top: 0;
    left: 0;
    border-top-left-radius: 6px;
  }
  
  &:after {
    top: 0;
    left: 0;
    border-top-left-radius: 6px;
  }
`;

const TopRight = styled(Corner)`
  top: 20px;
  right: 20px;
  
  &:before {
    top: 0;
    right: 0;
    border-top-right-radius: 6px;
  }
  
  &:after {
    top: 0;
    right: 0;
    border-top-right-radius: 6px;
  }
`;

const BottomLeft = styled(Corner)`
  bottom: 20px;
  left: 20px;
  
  &:before {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 6px;
  }
  
  &:after {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 6px;
  }
`;

const BottomRight = styled(Corner)`
  bottom: 20px;
  right: 20px;
  
  &:before {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 6px;
  }
  
  &:after {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 6px;
  }
`;

const Flourish = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  
  &:before {
    content: "❦";
    font-size: 24px;
    color: #8b4513;
  }
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    
    &:before {
      font-size: 18px;
    }
  }
`;

const LeftFlourish = styled(Flourish)`
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const RightFlourish = styled(Flourish)`
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const TopFlourish = styled(Flourish)`
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomFlourish = styled(Flourish)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const RenaissanceBorder = () => {
  return (
    <BorderContainer>
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
      <LeftFlourish />
      <RightFlourish />
      <TopFlourish />
      <BottomFlourish />
    </BorderContainer>
  );
};

export default RenaissanceBorder; 