import styled, { css } from "styled-components";

const StyledOrders = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-500"]};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `}
`;

export default StyledOrders;
