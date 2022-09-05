import styled, { css } from "styled-components";

const StyledFilters = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > * {
            background-color: ${theme.colors["primary-100"]};
        }
    `};
`;

export default StyledFilters;
