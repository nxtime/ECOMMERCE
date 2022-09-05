import styled, { css } from "styled-components";

const StyledPopup = styled.div<{ pos: string }>`
    ${({ theme, pos }) => css`
        display: flex;
        position: relative
        justify-content: ${pos};
        transition: all ease 5s;

        & .loading-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: .5rem;
            background-color: ${theme.colors["primary-900"]};
            transition: width 3s .2s linear;

            &.loading {
                width: 0%;
            }
        }
        & > div {
            transform: translateX(${pos !== "left" ? "-100%" : "100%"});
            transition: all ease-out .2s;
            
            &.popup {
                transform: translateX(0%);
            }
        }

        & > div > div {
            max-width: 20rem;
            margin-top: 2rem;
            margin-inline: 0;
            margin-${pos}: auto;
        }
    `}
`;

export default StyledPopup;
