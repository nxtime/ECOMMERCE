import styled, { css } from "styled-components";

const StyledSubmenu = styled.div`
    ${({ theme }) => css`
        position: absolute;
        top: 100%;
        width: 100%;
        min-height: 10rem;
        left: 0;
        z-index: 2;
        display: flex;

        .submenu {
            width: 100%;
            background-color: ${theme.colors["primary-500"]};
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            ul {
                display: flex;

                flex-direction: column;
                &__nav-item {
                }
            }
        }
    `}
`;

export default StyledSubmenu;
