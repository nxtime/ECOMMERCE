import styled, { css } from "styled-components";

const StyledCard = styled.div`
    ${({ theme }) => css`
        padding: 2rem;
        margin: auto;
        background-color: ${theme.colors["primary-300"]};
    `}
`;

export default StyledCard;
