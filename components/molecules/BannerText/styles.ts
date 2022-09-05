import styled, { css } from "styled-components";

const StyledBannerText = styled("div")`
    ${({ theme }) => css`
        position: relative;
        cursor: pointer;

        & img {
            transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
        }

        &:hover img {
            min-width: 120% !important;
            min-height: 120% !important;
        }

        & .banner-info {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(1px) brightness(0.5);
            width: 100%;
            height: 100%;
            color: ${theme.colors["neutral-100"]};
            z-index: 1;

            & h2 {
                font-size: 24pt;
                text-transform: uppercase;
                font-weight: bold;
                cursor: text;
            }
            & h4 {
                font-size: 16pt;
                font-weight: 300;
                cursor: text;
            }
        }
    `}
`;

export default StyledBannerText;
