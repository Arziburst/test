// Core
import React from 'react';

// Styles
import { Li } from './styles'

export const Cat = ({ url, isMobile }) => {
    return (
        <Li 
            imageSrc={url}
            isMobile={isMobile}>
            <div />
        </Li>
    );
}