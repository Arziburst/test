// Core
import React, { useState, useRef } from "react";

// Components
import { Cat } from '../../components';

// Hooks
import { useCatImages } from "../../hooks/useCatImages";

// Styles & Assets
import { GlobalStyles } from '../../assets';
import { Container } from './styles';

export const App = () => {
  const cats = useCatImages();
  const [ isMobile, setIsMobile ] = useState(null);
  const containerRef = useRef();

  const toggleStyleState = () => {
      isMobile === null && void setIsMobile(containerRef.current.clientWidth <= 812);
      typeof isMobile === 'boolean' && void setIsMobile(!isMobile);
  };

  const resetIsStyleState = () => setIsMobile(null);

  return (
    <Container isMobile={isMobile} ref={containerRef}>
      <GlobalStyles />
      <header>
        <h1>Images of Cats</h1>
        <p style = {{color: 'red'}}>desktop</p>
        <p style = {{color: 'green'}}>mobile</p>
        <button 
          className = 'styledButton'
          onClick={toggleStyleState}>
          Toggle styling
        </button>
        <button 
          onClick={resetIsStyleState} 
          disabled={isMobile === null}>
          Reset styling
        </button>
      </header>
      <ul>
        {
          cats.map((cat) => (
            <Cat
              isMobile={isMobile}
              {...cat}
              key={cat.id}
            />
          ))
        }
      </ul>
    </Container>
  );
}
