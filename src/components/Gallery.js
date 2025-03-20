import React from 'react';
import styled from 'styled-components';
import botticelli from '../assets/images/botticelli.jpg';
import davinci from '../assets/images/davinci.jpg';
import raphael from '../assets/images/raphael.jpg';

const GalleryContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #f8f1e5;
`;

const GalleryTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  color: #5e3023;
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #c9b18c;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ArtImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border: 1px solid #c9b18c;
`;

const ArtTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #5e3023;
  margin: 1rem 0 0.5rem;
  text-align: center;
`;

const ArtCaption = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1rem;
  color: #8c5d42;
  text-align: center;
`;

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      image: botticelli,
      title: 'La Naissance de Vénus',
      artist: 'Sandro Botticelli',
      caption: 'Une beauté éternelle, comme mon admiration pour toi.'
    },
    {
      id: 2,
      image: davinci,
      title: 'La Joconde',
      artist: 'Leonardo da Vinci',
      caption: 'Un sourire mystérieux, comme celui que tu me donnes.'
    },
    {
      id: 3,
      image: raphael,
      title: 'L\'École d\'Athènes',
      artist: 'Raphael',
      caption: 'Une perfection artistique qui me rappelle ta grâce.'
    }
  ];

  return (
    <GalleryContainer>
      <GalleryTitle>L'Art de la Renaissance</GalleryTitle>
      <ImagesContainer>
        {artworks.map(artwork => (
          <ArtPiece key={artwork.id}>
            <ArtImage src={artwork.image} alt={artwork.title} />
            <ArtTitle>{artwork.title}</ArtTitle>
            <ArtCaption>{artwork.artist}</ArtCaption>
            <ArtCaption>{artwork.caption}</ArtCaption>
          </ArtPiece>
        ))}
      </ImagesContainer>
    </GalleryContainer>
  );
};

export default Gallery; 