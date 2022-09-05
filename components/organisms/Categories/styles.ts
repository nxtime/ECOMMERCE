import styled, { css } from "styled-components";

const StyledCategories = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["primary-300"]};
    `}
`;

export default StyledCategories;
