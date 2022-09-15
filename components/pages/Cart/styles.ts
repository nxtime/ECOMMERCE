import styled, { css } from "styled-components";

const StyledCart = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;

        & > ul {
            background-color: ${theme.colors["primary-500"]};
            padding: 1rem;
            width: 100%;
        }
    `}
`;

export default StyledCart;
