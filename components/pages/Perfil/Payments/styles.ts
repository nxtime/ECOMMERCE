import styled, { css } from "styled-components";

const StyledPayments = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors["neutral-100"]};
    `}
`;

export default StyledPayments;
