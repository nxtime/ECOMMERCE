import styled, { css } from "styled-components";

const StyledProductsList = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        gap: 2rem;
        background-color: ${theme.colors["neutral-100"]};

        .products-title {
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 50%;
                left: 75%;
                height: 0.25rem;
                background-color: ${theme.colors["primary-500"]};
            }
        }

        .products-container {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
    `}
`;

export default StyledProductsList;
