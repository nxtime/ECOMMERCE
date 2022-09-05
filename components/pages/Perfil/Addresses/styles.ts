import styled, { css } from "styled-components";

const StyledAddresses = styled.div`
    ${({ theme }) => css`
        padding: 1rem;
        background-color: ${theme.colors["primary-500"]};
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `}
`;

export default StyledAddresses;
