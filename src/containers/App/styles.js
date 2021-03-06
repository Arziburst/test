import styled, { css } from 'styled-components';

const ulCssDesktop = css`
    grid-template-columns: 1fr 1fr 1fr;
`;

const ulCss = css`
    ${ulCssDesktop};

    @media(max-width: 812px) {
        grid-template-columns: auto
    }
`;

export const Container = styled.section`
    .styledButton {
        background-color: ${({ isMobile }) => {
            if (typeof isMobile === 'boolean') {
                return isMobile ? 'red' : 'green'
            }
            
            return '#fff';
        }};
    }
    
    ul {
        display: grid;

        ${({ isMobile }) => {
            switch (true) {
                case isMobile === null: return ulCss;
                case isMobile: return ulCssDesktop;
                default: return {};
            }
        }
    }
`;