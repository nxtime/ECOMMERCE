import styled, { css } from "styled-components";

const StyledFieldset = styled.fieldset`
    ${({ theme }) => css`
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border: 2px solid ${theme.colors["primary-900"]};

        & .input-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 1rem;
        }
    `}
`;

export default StyledFieldset;
