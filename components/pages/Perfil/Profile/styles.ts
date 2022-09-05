import styled, { css } from "styled-components";

const StyledProfile = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-500"]};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `}
`;

export default StyledProfile;
