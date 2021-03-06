import styled, { css } from 'styled-components';

const liCssDesktop = css`
    div {
        width: 100%;

        &:before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
    }
`;

const liCssMobile = css`
    display: grid;
    place-items: center;

    div {
        display: grid;
        place-items: center;

        width: 90vw;
        height: 90vw;
    }
`;

const liCssWithMedia = css`
    @media(max-width: 812px) {
        ${liCssMobile};
    }

    @media(min-width: 813px) {
        ${liCssDesktop};
    }
`;


export const Li = styled.li`
    div {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: ${({ imageSrc }) => `url(${imageSrc})`};  
    }

    ${({ isMobile }) => {
        switch (true) {
            case isMobile === null: return liCssWithMedia;
            case isMobile: return liCssDesktop;
            default: return liCssMobile;
        }
    }};  
`;
